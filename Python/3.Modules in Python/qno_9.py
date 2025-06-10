import importlib

module_name = "greet"
function_name = "say_hello"

module = importlib.import_module(module_name)
function = getattr(module, function_name)

result = function("Bhanu")
print(result)
