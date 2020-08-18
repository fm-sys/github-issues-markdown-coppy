// ==UserScript==
// @name         git markdown copy
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  A button for copy name and number with attached link in markdown style
// @author       fm-sys
// @match        https://github.com/*/*/issues/*
// @match        https://github.com/*/*/pull/*
// @grant        GM_setClipboard
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';

    var inhalt = document.getElementsByTagName('h1')[1];

    unsafeWindow.copy = function( param ) {
        navigator.clipboard.writeText("["+inhalt.children[0].innerHTML.trim()+" "+inhalt.children[1].innerHTML+"]("+window.location.href+")");
    }

    //inhalt.innerHTML = inhalt.innerHTML + "<button onClick=\"copy()\">kopieren</button>";
    inhalt.innerHTML = inhalt.innerHTML + "<svg style='cursor:pointer' onClick=\"copy()\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"25\" height=\"25\" aria-hidden=\"true\"><path fill-rule=\"evenodd\" d=\"M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z\"></path></svg>";//onmouseover=\"evt.target.setAttribute('fill', 'blue');\" onmouseout=\"evt.target.setAttribute('fill','black');\"

})();
