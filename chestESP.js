/**
 * @license AGPL-3.0
 * Blooket Cheats (Modified)
 * Copyright (C) 2023-present 05Konz, Modified by [Your Name] in 2024
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 * 
 * Source: https://github.com/Blooket-Council/Blooket-Cheats 05konz994@gmail.com
 * Modified by smit4k in 2024
 * github.com/smit4k/
 */


// PRESS S FOR CHESTESP TO APPEAR

(() => {
    let iframe = document.querySelector("iframe");
    if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.style.display = "none";
        document.body.append(iframe);
    }

    /* By CryptoDude3, enhanced by smit4k*/
    if (window.fetch.call.toString() == 'function call() { [native code] }') {
        const call = window.fetch.call;
        window.fetch.call = function () {
            if (!arguments[1].includes("s.blooket.com/rc")) return call.apply(this, arguments);
        }
    }

    const timeProcessed = 1730769909106;
    let latestProcess = -1;

    const cheat = (async () => {
        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.state.choices.forEach(({ text }, index) => {
            let chest = document.querySelector(`div[class*='choice${index + 1}']`);
            if (!chest || chest.querySelector('div')) return;
            let choice = document.createElement('div');
            choice.style.color = "white";
            choice.style.fontFamily = "Arial";
            choice.style.fontSize = "2em";
            choice.style.display = "flex";
            choice.style.justifyContent = "center";
            choice.style.transform = "translateY(200px)";
            choice.innerText = text;
            chest.append(choice);
        });
    });

    let img = new Image;
    img.src = "https://raw.githubusercontent.com/Blooket-Council/Blooket-Cheats/main/autoupdate/timestamps/gold/chestESP.png?" + Date.now();
    img.crossOrigin = "Anonymous";
    img.onload = function() {
        const c = document.createElement("canvas");
        const ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0, this.width, this.height);
        let { data } = ctx.getImageData(0, 0, this.width, this.height), decode = "", last;
        let i = 0;
        while (i < data.length) {
            let char = String.fromCharCode(data[i % 4 == 3 ? (i++, i++) : i++] + data[i % 4 == 3 ? (i++, i++) : i++] * 256);
            decode += char;
            if (char == "/" && last == "*") break;
            last = char;
        }
        let _, time = timeProcessed, error = "There was an error checking for script updates. Run cheat anyway?";
        try {
            [_, time, error] = decode.match(/LastUpdated: (.+?); ErrorMessage: "((.|\n)+?)"/);
        } catch (e) {}
        if ((latestProcess = parseInt(time)) <= timeProcessed || iframe.contentWindow.confirm(error)) cheat();
    };
    img.onerror = img.onabort = () => {
        img.onerror = img.onabort = null;
        cheat();
        let iframe = document.querySelector("iframe");
        iframe.contentWindow.alert("It seems the GitHub is either blocked or down.\n\nIf it's NOT blocked, join the Discord server for updates\nhttps://discord.gg/jHjGrrdXP6\n(The cheat will still run after this alert)");
    };

    // Add event listener for 'S' key press
    document.addEventListener('keydown', function(event) {
        if (event.key === 's' || event.key === 'S') {
            cheat();  // Run the cheat when 'S' is pressed
        }
    });
})();
