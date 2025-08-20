/*
<div id="printContent">
    <div onclick="home()" class="home">
        <p class="home">♠ Return Home ♠</p>
    </div>
    <img class="content-tall" src="assets/images/print/NJ STUDIO-11.jpg" />
    <br />
    <p class="names"><i>The Lame Girl</i></p>
    <p class="names">Intaglio Print, 2024</p>
    <br /><br /><br />

    <img class="content-wide" src="assets/images/print/NJ STUDIO-10.jpg" />
    <br />
    <p class="names"><i>Cueva</i></p>
    <p class="names">Intaglio Print, 2024</p>
    <br /><br /><br />

    <img class="content-wide" src="assets/images/print/NJ STUDIO-9.jpg" />
    <br />
    <p class="names"><i>Demons</i></p>
    <p class="names">Intaglio Print, 2024</p>
    <br /><br /><br />

    <img class="content-wide" src="assets/images/print/NJ STUDIO-12 (1) copy.jpg" />
    <br />
    <p class="names"><i>Is It Cold in the Water?</i></p>
    <p class="names">Intaglio Print, 2024</p>
    <br /><br /><br />



    <img class="content-tall" src="assets/images/print/NJ STUDIO-12 copy.jpg" />
    <p class="names"><i>These Devils In My Patterned Dreams</i></p>
    <p class="names">Intaglio Print, 2024</p>
    <br /><br /><br />
    <img class="content-wide" src="assets/images/print/NJ STUDIO-13 copy.jpg" />
    <br />
    <p class="names"><i>Karaoke</i></p>
    <p class="names">Intaglio Print, 2024</p>
    <br /><br /><br />
    <img class="content-tall" src="assets/images/print/NJ STUDIO-6 copy.jpg" />
    <br />
    <p class="names"><i>Demons II</i></p>
    <p class="names">Intaglio Print, 2024</p>
    <br /><br /><br />

    <img class="content-tall" src="assets/images/print/NJ STUDIO-8 copy.jpg" />
    <br />
    <p class="names"><i>Ensnared By the Words of the Mouth</i></p>
    <p class="names">Intaglio Print, 2024</p>
    <br /><br /><br />
</div>
*/

export function Print() {
    const prints = [
        {
            src: "assets/images/print/NJ STUDIO-11.jpg",
            alt: "The Lame Girl",
            title: "The Lame Girl",
            orientation: "content-tall"
        },
        {
            src: "assets/images/print/NJ STUDIO-10.jpg",
            alt: "Cueva",
            title: "Cueva",
            orientation: "content-wide"
        },
        {
            src: "assets/images/print/NJ STUDIO-9.jpg",
            alt: "Demons",
            title: "Demons",
            orientation: "content-wide"
        },
        {
            src: "assets/images/print/NJ STUDIO-12 (1) copy.jpg",
            alt: "Is It Cold in the Water?",
            title: "Is It Cold in the Water?",
            orientation: "content-wide"
        },
        {
            src: "assets/images/print/NJ STUDIO-12 copy.jpg",
            alt: "These Devils In My Patterned Dreams",
            title: "These Devils In My Patterned Dreams",
            orientation: "content-tall"
        },
        {
            src: "assets/images/print/NJ STUDIO-13 copy.jpg",
            alt: "Karaoke",
            title: "Karaoke",
            orientation: "content-wide"
        },
        {
            src: "assets/images/print/NJ STUDIO-6 copy.jpg",
            alt: "Demons II",
            title: "Demons II",
            orientation: "content-tall"
        },
        {
            src: "assets/images/print/NJ STUDIO-8 copy.jpg",
            alt: "Ensnared By the Words of the Mouth",
            title: "Ensnared By the Words of the Mouth",
            orientation: "content-tall"
        }
    ];

    return (
        <div >
            {prints.map((print, idx) => (
                <div key={idx}>
                    <img className={print.orientation} src={print.src} alt={print.alt} />
                    <br />
                    <p className="names"><i>{print.title}</i></p>
                    <p className="names">Intaglio Print, 2024</p>
                    <br /><br /><br />
                </div>
            ))}
        </div>
    );
}