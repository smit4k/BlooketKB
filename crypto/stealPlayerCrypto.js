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
 * By CryptoDude3, enhanced by smit4k
 * Modified by smit4k in 2024
 * github.com/smit4k
*/

// PRESS S FOR STEAL CRYPTO ALERT TO APPEAR

(() => {
    let iframe = document.querySelector("iframe");
    if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.style.display = "none";
        document.body.append(iframe);
    }

    const timeProcessed = 1730769904235;
    let latestProcess = -1;

    
    const cheat = (async () => {
        let i = document.createElement('iframe');
        document.body.append(i);
        window.prompt = i.contentWindow.prompt.bind(window);
        i.remove();
        let target = prompt("Which player's crypto would you like to steal?");
        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
            let player;
            if (players && (player = Object.entries(players).find((x) => x[0].toLowerCase() == target.toLowerCase()))) {
                const cr = player[1].cr;
                stateNode.setState({
                    crypto: stateNode.state.crypto + cr,
                    crypto2: stateNode.state.crypto + cr
                });
                stateNode.props.liveGameController.setVal({
                    path: "c/" + stateNode.props.client.name,
                    val: {
                        b: stateNode.props.client.blook,
                        p: stateNode.state.password,
                        cr: stateNode.state.crypto + cr,
                        tat: player[0] + ":" + cr
                    }
                });
            }
        })
    });

    
    let img = new Image;
    img.src = "https://raw.githubusercontent.com/Blooket-Council/Blooket-Cheats/main/autoupdate/timestamps/crypto/stealPlayersCrypto.png?" + Date.now();
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
            
        }
    }
    img.onerror = img.onabort = () => {
        img.onerror = img.onabort = null;
        let iframe = document.querySelector("iframe");
        iframe.contentWindow.alert("It seems the GitHub is either blocked or down.\n\nIf it's NOT blocked, join the Discord server for updates\nhttps://discord.gg/jHjGrrdXP6\n(The cheat will still run after this alert)")
    }

    
    document.addEventListener('keydown', function(event) {
        if (event.key === 's' || event.key === 'S') {
            cheat();
        }
    });

})();
