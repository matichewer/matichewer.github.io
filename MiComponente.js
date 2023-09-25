class MiComponente extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = "<p>1899</p>";
    }
}


customElements.define('team-d', MiComponente);
