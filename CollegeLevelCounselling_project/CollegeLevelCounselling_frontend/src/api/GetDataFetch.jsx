async function GetDataFetch(url_string) {
    try {
        let res = await fetch(`http://localhost:8080/api/${url_string}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        let contentType = res.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
            return await res.json();
        } else {
            return await res.text();  // Handle non-JSON responses
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        return { error: error.message };  // Return an error object
    }
}

export default GetDataFetch;
