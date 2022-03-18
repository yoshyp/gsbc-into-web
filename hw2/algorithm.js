// randomly generated N = 100 length array 1 <= A[N] <= 1000
Array.from({length: 1000}, () => Math.floor(Math.random() * 1000));

// Print the results by appending paragraph nodes to the document body.
for (var result of results)
{
    let textNode = document.createElement("p")
    textNode.textContent = result
    document.body.appendChild(textNode)
}