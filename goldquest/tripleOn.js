/**
 * @license AGPL-3.0
 * Blooket Cheats
 * Copyright (C) 2023-present 05Konz
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
 * Source: https://github.com/Blooket-Council/Blooket-Cheats 05konz994@gmail.com
 * Modified by smit4k in 2024
*/

// CHEAT STARTS DEACTIVATED, ONCE  T  IS PRESSED, IT IS PERMANANTLY TOGGLED ON. BE CAREFUL

(() => {
    let iframe = document.querySelector("iframe");
    if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.style.display = "none";
        document.body.append(iframe);
    }

    let cheatActive = false;

    /* By CryptoDude3, enhanced by smit4k */
    if (window.fetch.call.toString() == 'function call() { [native code] }') {
        const call = window.fetch.call;
        window.fetch.call = function () {
            if (!arguments[1].includes("s.blooket.com/rc")) return call.apply(this, arguments);
        }
    }
    const timeProcessed = 1730769908732;
    let latestProcess = -1;

    const activateCheat = async () => {
        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        stateNode.state.gold == 0 && stateNode.setState({ gold: 100, gold2: 100 });
        stateNode._choosePrize ||= stateNode.choosePrize;
        const triple = { type: "multiply", val: 3, text: "Triple Gold!", blook: "Unicorn" };
        stateNode.choosePrize = function (i) {
            stateNode.state.choices[i] = triple;
            stateNode._choosePrize(i);
        }
    };

    const deactivateCheat = () => {
        console.log("Cheat Deactivated");
    };

    let img = new Image;
    img.src = "https://raw.githubusercontent.com/Blooket-Council/Blooket-Cheats/main/autoupdate/timestamps/gold/alwaysTriple.png?" + Date.now();
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
        if ((latestProcess = parseInt(time)) <= timeProcessed || iframe.contentWindow.confirm(error)) {
            if (cheatActive) activateCheat();
        }
    };
    img.onerror = img.onabort = () => {
        img.onerror = img.onabort = null;
        if (cheatActive) activateCheat();
        let iframe = document.querySelector("iframe");
        iframe.contentWindow.alert("It seems the GitHub is either blocked or down.\n\nIf it's NOT blocked, join the Discord server for updates\nhttps://discord.gg/jHjGrrdXP6\n(The cheat will still run after this alert)")
    };

    document.addEventListener('keydown', function(event) {
        if (event.key === 'T') {
            cheatActive = !cheatActive;
            if (cheatActive) {
                activateCheat();
                alert("Cheat Activated!");
            } else {
                deactivateCheat();
                alert("Cheat Deactivated!");
            }
        }
    });
})();
