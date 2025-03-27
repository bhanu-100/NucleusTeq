async function Fetch(data, url_string, method = "POST") {
  try {
      let res = await fetch(`http://localhost:8080/api/${url_string}`, {
          method: method, // Default to POST but allow other methods
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data) // GET requests shouldn't have a body
      });

      if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
      }

      let contentType = res.headers.get("Content-Type");
      if (contentType && contentType.includes("application/json")) {
          return await res.json();
      } else {
          return await res.text(); // Handle plain text responses
      }
  } catch (error) {
      console.error("Fetch Error:", error);
      return { error: error.message }; // Return an error object instead of crashing
  }
}

export default Fetch;
