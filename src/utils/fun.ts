class NewsPaper {
    elems: {
        book: HTMLElement;
        leaves: any;
        buttons: {
            next: HTMLElement | null;
            back: HTMLElement | null;
        };
    };
    currentPagePosition: number;
    constructor(NewsPaper: HTMLElement) {
        this.elems = {
            book: NewsPaper,
            leaves: NewsPaper.querySelectorAll(".leaf"),
            buttons: {
                next: document.getElementById("nextpage"),
                back: document.getElementById("backpage")
            }
        };
        this.setupEvents();
        this.currentPagePosition = 0;
        this.turnPage(0);
    }
    setPagePosition(page: HTMLElement, position: number, index: number): void {
        let transform: string = "";
        transform = "translate3d(0,0," + ((position < 0 ? 1 : -1) * Math.abs(index)) + "px)";
        if (position < 0) {
            transform += "rotate3d(0,1,0,-180deg)";
        }
        if (page.style.transform !== transform) {
            page.style.transform = transform;
        }
    }
    turnPage(delta: number): void {
        this.currentPagePosition += delta;
        if (this.currentPagePosition < 0) {
            this.currentPagePosition = 0;
            return;
        }
        if (this.currentPagePosition > this.elems.leaves.length) {
            this.currentPagePosition = this.elems.leaves.length;
            return;
        }
        this.elems.leaves.forEach((page: HTMLElement, index: number) => {
            const pageNumber: number = index;
            this.setPagePosition(page, pageNumber - this.currentPagePosition, index);
        });
        if (this.currentPagePosition === 0) {
            this.elems.buttons.back?.setAttribute("disabled", "disabled");
        } else if (this.currentPagePosition === this.elems.leaves.length) {
            this.elems.buttons.next?.setAttribute("disabled", "disabled");
        } else {
            this.elems.buttons.next?.removeAttribute("disabled");
            this.elems.buttons.back?.removeAttribute("disabled");
        }
    }
    setupEvents(): void {
        document.getElementById("nextpage")?.addEventListener("click", () => {
            this.turnPage(1);
        });
        document.getElementById("backpage")?.addEventListener("click", () => {
            this.turnPage(-1);
        });
    }
}
const newspaper: NewsPaper = new NewsPaper(document.getElementById("NewsPaper") as HTMLElement);