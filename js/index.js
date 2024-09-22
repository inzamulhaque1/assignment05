//! Universal function 

function getInputValueById(id) {
    return parseFloat(document.getElementById(id).value);
};

function getTextValueById(id) {
    return parseFloat(document.getElementById(id).innerText);
};





// ! Universal function END ! //

// Donate Noakhali section


document.getElementById("btn-donate-noakhali")

    .addEventListener("click", function () {

        const inputDonateNoakhali = getInputValueById("input-donate-noakhali");

        document.getElementById('noakhali-error').classList.add('hidden');

        if (isNaN(inputDonateNoakhali) || inputDonateNoakhali < 0) {
            // alert("Please input a valid positive number");
            document.getElementById('noakhali-error').classList.remove('hidden');
            return;
        }


        const DonateBalanceNoakhali = getTextValueById("donate-noakhali-main-balance");

        const mainBalance = getTextValueById("main-balance");

        if (mainBalance === "" || mainBalance === null) {
            alert("Main balance is empty. Please recharge your balance first.");
            return;
        }

        const myRemainBalance = mainBalance - inputDonateNoakhali

        if (myRemainBalance < 0) {
            alert("Please Recharge Your Balance First");
            return;
        }

        const noakhaliMainBalance = inputDonateNoakhali + DonateBalanceNoakhali




        document.getElementById('donate-noakhali-main-balance').innerText = noakhaliMainBalance;

        document.getElementById('main-balance').innerText = myRemainBalance;

        document.getElementById("input-donate-noakhali").value = ''; 

        // history

        const historyItem = document.createElement("div");
        historyItem.className = 'bg-white p-3 rounded-lg border-2 border-gray-500 p-10 ';

        historyItem.innerHTML = `
            <h3 class="text-xl font-bold text-black">${inputDonateNoakhali} Donate for Flood at Noakhali, Bangladesh</h3>
            <p>Date: ${new Date().toString()}</p>
        `;

        const historyContainer = document.getElementById("history-list");
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);



        // !Modal
        document.getElementById("congratulation-modal").style.display = "flex";
        document.getElementById("modal-custom-text").innerText = "Noakhali Flood"

    });




// Donate Feni Section
document.getElementById("btn-donate-feni")

    .addEventListener("click", function () {

        const inputDonateFeni = getInputValueById("input-donate-feni");

        document.getElementById('feni-error').classList.add('hidden');

        if (isNaN(inputDonateFeni) || inputDonateFeni < 0) {
            document.getElementById('feni-error').classList.remove('hidden');
            return;
        }


        const DonateBalanceFeni = getTextValueById("donate-feni-main-balance");

        const mainBalance = getTextValueById("main-balance");

        if (mainBalance === "" || mainBalance === null) {
            alert("Main balance is empty. Please recharge your balance first.");
            return;
        }

        const myRemainBalance = mainBalance - inputDonateFeni

        if (myRemainBalance < 0) {
            alert("Please Recharge Your Balance First");
            return;
        }

        const feniMainBalance = inputDonateFeni + DonateBalanceFeni



        document.getElementById('donate-feni-main-balance').innerText = feniMainBalance;
        document.getElementById('main-balance').innerText = myRemainBalance;
        document.getElementById("input-donate-feni").value = ''; 


        // history

        const historyItem = document.createElement("div");
        historyItem.className = 'bg-white p-3 rounded-lg border-2 border-gray-500 p-10 ';

        historyItem.innerHTML = `
            <h3 class="text-xl font-bold text-black">${inputDonateFeni} Donate for Flood Relief in Feni,Bangladesh</h3>
            <p>Date: ${new Date().toString()}</p>
        `;

        const historyContainer = document.getElementById("history-list");
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);


        // !Modal
        document.getElementById("congratulation-modal").style.display = "flex";
        document.getElementById("modal-custom-text").innerText = "Feni Flood"
    });


document.getElementById("btn-Quota")

    .addEventListener("click", function () {

        const inputDonateQuota = getInputValueById("input-quota");

        document.getElementById('quota-error').classList.add('hidden');

        if (isNaN(inputDonateQuota) || inputDonateQuota < 0) {
            document.getElementById('quota-error').classList.remove('hidden');
            return;
        }


        const DonateBalanceQuota = getTextValueById("donate-quota");

        const mainBalance = getTextValueById("main-balance");

        if (mainBalance === "" || mainBalance === null) {
            alert("Main balance is empty. Please recharge your balance first.");
            return;
        }

        const myRemainBalance = mainBalance - inputDonateQuota

        if (myRemainBalance < 0) {
            alert("Please Recharge Your Balance First");
            return;
        }
        const quotaMainBalance = inputDonateQuota + DonateBalanceQuota



        document.getElementById('donate-quota').innerText = quotaMainBalance;
        document.getElementById('main-balance').innerText = myRemainBalance;


        // history

        const historyItem = document.createElement("div");
        historyItem.className = 'bg-white p-3 rounded-lg border-2 border-gray-500 p-10 ';

        historyItem.innerHTML = `
            <h3 class="text-xl font-bold text-black">${inputDonateQuota} Taka is Donated for Injured in the Quota Movement</h3>
            <p>Date: ${new Date().toString()}</p>
        `;

        const historyContainer = document.getElementById("history-list");
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
        document.getElementById("input-quota").value = ''; 


        // !Modal
        document.getElementById("congratulation-modal").style.display = "flex";
        document.getElementById("modal-custom-text").innerText = "Quota Movement"
    });



// Button press hide ans add section History and donate

const historyButton = document.getElementById("btn-history");

const donateButton = document.getElementById("btn-donate");

historyButton.addEventListener("click", function () {

    historyButton.classList.remove('bg-white', 'text-gray-500', 'border', 'border-gray-500');
    historyButton.classList.add('text-black', 'bg-lime-500')

    donateButton.classList.add('bg-white', 'text-gray-500', 'border', 'border-gray-500');
    donateButton.classList.remove('text-black', 'bg-lime-500')




    document.getElementById('card-section').classList.add('hidden')
    document.getElementById('history-section').classList.remove('hidden')
});

donateButton.addEventListener("click", function () {

    donateButton.classList.remove('bg-white', 'text-gray-500', 'border', 'border-gray-500');
    donateButton.classList.add('text-black', 'bg-lime-500')

    historyButton.classList.add('bg-white', 'text-gray-500', 'border', 'border-gray-500');
    historyButton.classList.remove('text-black', 'bg-lime-500')




    document.getElementById('card-section').classList.remove('hidden')
    document.getElementById('history-section').classList.add('hidden')
});












// ! modal  close
document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("congratulation-modal").style.display = "none";
});