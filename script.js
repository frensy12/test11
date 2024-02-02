document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('searchBar');
    const searchButton = document.getElementById('searchButton');
  
    // Your proxy server URL
    const proxyUrl = '75.183.82.221:8193';
  
    searchButton.addEventListener('click', function () {
      const searchQuery = searchBar.value;
  
      if (searchQuery.trim() !== '') {
        const url = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
  
        // Use the proxy for the request
        fetch(proxyUrl + '?' + url)
          .then(response => response.text())
          .then(html => {
            // Handle the HTML response (e.g., parse it, extract information)
            console.log(html);
          })
          .catch(error => {
            console.error('Error fetching search results:', error);
          });
      }
    });
  });
  