let coins = 0;
let lastAdTime = 0;

function showAd() {
    let adNetwork = Math.random() < 0.5 ? "Unity" : "AdMob"; 

    if (adNetwork === "Unity") {
        console.log("Showing Unity Ad");
        document.getElementById("adContainer").innerHTML = `<iframe src="UNITY_AD_URL" width="300" height="250"></iframe>`;
    } else {
        console.log("Showing AdMob Ad");
        document.getElementById("adContainer").innerHTML = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="AD_MOB_CLIENT_ID"
             data-ad-slot="AD_MOB_SLOT_ID"
             data-ad-format="auto"></ins>
        <script>
             (adsbygoogle = window.adsbygoogle || []).push({});
        </script>`;
    }
}

function rewardUser() {
    coins += 10; 
    document.getElementById("coinCount").innerText = coins;
    alert("You earned 10 coins! Total: " + coins);
}

function showAdAndReward() {
    let now = new Date().getTime();
    if (now - lastAdTime > 30000) { 
        showAd();
        setTimeout(rewardUser, 5000);
        lastAdTime = now;
    } else {
        alert("Please wait for some time before watching another ad!");
    }
}
