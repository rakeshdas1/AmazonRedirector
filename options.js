function submitBtn() {
    var linksEntered = document.getElementById('links').value;
    //to keep the values in the textbox after the button is pressed
    document.getElementById('links').value = linksEntered;


    chrome.storage.sync.set({
            links: linksEntered
        },
        function () {
            var status = document.getElementById('status');
            status.textContent = 'Links entered were: ' + linksEntered;
        });

}
document.getElementById('submitBtn').addEventListener('click', submitBtn);



