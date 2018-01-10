Vue.component('vue-history', {
    template: `
        <div class="historyPanel">
            <h3>History</h3>
        </div>
    `
});

new Vue({
    el: '#vueHistoryPanel',
});

Vue.component('vue-chessboard', {
    template: `
        <div class="chessboard">
            <div id="row8">
                <button id="A8" class="fieldbutton white"></button>
                <button id="B8" class="fieldbutton black"></button>
                <button id="C8" class="fieldbutton white"></button>
                <button id="D8" class="fieldbutton black"></button>
                <button id="E8" class="fieldbutton white"></button>
                <button id="F8" class="fieldbutton black"></button>
                <button id="G8" class="fieldbutton white"></button>
                <button id="H8" class="fieldbutton black"></button>
            </div>
            <div id="row7">
                <button id="A7" class="fieldbutton black"></button>
                <button id="B7" class="fieldbutton white"></button>
                <button id="C7" class="fieldbutton black"></button>
                <button id="D7" class="fieldbutton white"></button>
                <button id="E7" class="fieldbutton black"></button>
                <button id="F7" class="fieldbutton white"></button>
                <button id="G7" class="fieldbutton black"></button>
                <button id="H7" class="fieldbutton white"></button>
            </div>
            <div id="row6">
                <button id="A6" class="fieldbutton white"></button>
                <button id="B6" class="fieldbutton black"></button>
                <button id="C6" class="fieldbutton white"></button>
                <button id="D6" class="fieldbutton black"></button>
                <button id="E6" class="fieldbutton white"></button>
                <button id="F6" class="fieldbutton black"></button>
                <button id="G6" class="fieldbutton white"></button>
                <button id="H6" class="fieldbutton black"></button>
            </div>
            <div id="row5">
                <button id="A5" class="fieldbutton black"></button>
                <button id="B5" class="fieldbutton white"></button>
                <button id="C5" class="fieldbutton black"></button>
                <button id="D5" class="fieldbutton white"></button>
                <button id="E5" class="fieldbutton black"></button>
                <button id="F5" class="fieldbutton white"></button>
                <button id="G5" class="fieldbutton black"></button>
                <button id="H5" class="fieldbutton white"></button>
            </div>
            <div id="row4">
                <button id="A4" class="fieldbutton white"></button>
                <button id="B4" class="fieldbutton black"></button>
                <button id="C4" class="fieldbutton white"></button>
                <button id="D4" class="fieldbutton black"></button>
                <button id="E4" class="fieldbutton white"></button>
                <button id="F4" class="fieldbutton black"></button>
                <button id="G4" class="fieldbutton white"></button>
                <button id="H4" class="fieldbutton black"></button>
            </div>
            <div id="row3">
                <button id="A3" class="fieldbutton black"></button>
                <button id="B3" class="fieldbutton white"></button>
                <button id="C3" class="fieldbutton black"></button>
                <button id="D3" class="fieldbutton white"></button>
                <button id="E3" class="fieldbutton black"></button>
                <button id="F3" class="fieldbutton white"></button>
                <button id="G3" class="fieldbutton black"></button>
                <button id="H3" class="fieldbutton white"></button>
            </div>
            <div id="row2">
                <button id="A2" class="fieldbutton white"></button>
                <button id="B2" class="fieldbutton black"></button>
                <button id="C2" class="fieldbutton white"></button>
                <button id="D2" class="fieldbutton black"></button>
                <button id="E2" class="fieldbutton white"></button>
                <button id="F2" class="fieldbutton black"></button>
                <button id="G2" class="fieldbutton white"></button>
                <button id="H2" class="fieldbutton black"></button>
            </div>
            <div id="row1">
                <button id="A1" class="fieldbutton black"></button>
                <button id="B1" class="fieldbutton white"></button>
                <button id="C1" class="fieldbutton black"></button>
                <button id="D1" class="fieldbutton white"></button>
                <button id="E1" class="fieldbutton black"></button>
                <button id="F1" class="fieldbutton white"></button>
                <button id="G1" class="fieldbutton black"></button>
                <button id="H1" class="fieldbutton white"></button>
            </div>
        </div>
    `
});

new Vue({
    el: '#vueChessboard',
});

