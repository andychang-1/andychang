const paintings = [
    {
        src: "assets/images/paint/Wading 4.jpg",
        title: "Sometimes We Cannot Know Until We Have Touched the Darkness",
        medium: "Oil Paint on Wood, October 2022",
        className: "content-wide",
    },
    {
        src: "assets/images/paint/again and again even though we know loves landscape.jpg",
        title: "Again and Again, Even Though We Know Love's Landscape",
        medium: "Oil Paint on Wood, 2024",
        className: "content-wide",
    },
    {
        src: "assets/images/paint/a spy in the house of love.jpg",
        title: "A Spy in the House of Love",
        medium: "Acrylic Paint on Wood, 2024",
        className: "content-wide",
    },
    {
        src: "assets/images/paint/Gleaner.jpg",
        title: "The Gleaner",
        medium: "Oil Paint on Wood, 2024",
        className: "content-wide",
    },
    {
        src: "assets/images/paint/Close.jpg",
        title: "Hold A Shadow Close",
        medium: "Acrylic Paint on Wood, October 2023",
        className: "content-wide",
    },
    {
        src: "assets/images/paint/the air had changed shit wasnt the same.jpg",
        title: "The Air Had Changed, Shit Wasn't the Same",
        medium: "Acrylic Paint on Wood, 2024",
        className: "content-wide",
    },
    {
        src: "assets/images/paint/May Rockaways.jpg",
        title: "May Rockaways",
        medium: "Acrylic Paint on Wood, 2024",
        className: "content-wide",
    },
    {
        src: "assets/images/paint/muse stuff.jpg",
        title: "Muse Problems",
        medium: "Acrylic Paint on Wood, 2024",
        className: "content-wide",
    },
    {
        src: "assets/images/paint/Trouble in Paradise.jpg",
        title: "Trouble in Paradise",
        medium: "Acrylic Paint on Wood, 2025",
        className: "content-wide",
    },
    {
        src: "assets/images/paint/Come Back from the Shadows.jpg",
        title: "Come Back From the Shadows",
        medium: "Acrylic Paint on Wood, 2025",
        className: "content-wide",
    },
    {
        src: "assets/images/paint/Ro.jpg",
        title: "Ro",
        medium: "Oil Paint on Wood, October 2023",
        className: "content-wide",
    },
    {
        src: "assets/images/paint/Gulf.jpg",
        title: "But I Beneath A Rougher Sea Was Whelmed In Deeper Gulfs Than He",
        medium: "Acrylic Paint on Wood, October 2023",
        className: "content-wide",
    },
    {
        src: "assets/images/paint/Dull.jpg",
        title: "Dull Domestication",
        medium: "Acrylic Paint on Canvas, March 2023",
        className: "content-wide",
    },
    {
        src: "assets/images/paint/Alvaro.jpg",
        title: "Love is a Jungle",
        medium: "Acrylic Paint on Wood, October 2023",
        className: "content-wide",
    },
    {
        src: "assets/images/paint/Andy Gears.jpg",
        title: "Untitled",
        medium: "Acrylic Paint on Wood, October 2023",
        className: "content-wide",
    },
    {
        src: "assets/images/paint/Massage Train.jpg",
        title: "Touched-Starved",
        medium: "Acrylic Paint on Wood, October 2023",
        className: "content-wide",
    },
    {
        src: "assets/images/paint/Good Thing.jpg",
        title: "Then They Held Cups and Prayed Every Good Thing",
        medium: "Acrylic Paint on Wood, October 2023",
        className: "content-wide",
    },
    {
        src: "assets/images/paint/falconer.jpg",
        title: "The Falcon Cannot Hear the Falconer",
        medium: "Acrylic Paint on Wood, November 2022",
        className: "content-wide",
    },
    {
        src: "assets/images/paint/Back To Form.jpg",
        title: "Back to Form and Athleticism",
        medium: "Acrylic Paint on Wood, September 2023",
        className: "content-wide",
    },
    {
        src: "assets/images/paint/9_NatalieJacobs_Expert In a Dying Field.jpg",
        title: "Expert in a Dying Field",
        medium: "Acrylic Paint on Wood, July 2023",
        className: "content-wide",
    },
    {
        src: "assets/images/paint/Left Hand.jpg",
        title: "The Left Hand of Darkness (Is Light)",
        medium: "Acrylic Paint on Canvas, July 2022",
        className: "content-wide",
    },
    {
        src: "assets/images/paint/Jared Bull.jpg",
        title: "The Air Pockets",
        medium: "Acrylic Paint on Wood, July 2022",
        className: "content-wide",
    },
    {
        src: "assets/images/paint/Emma.jpg",
        title: "Blood Brothers",
        medium: "Acrylic Paint on Cardboard, July 2022",
        className: "content-wide",
    },
    {
        src: "https://cdn.glitch.global/6d1c4a4a-688d-40d1-b9d2-95cd2223a252/IMG_1608.jpg?v=1693925354077",
        title: "The Boxer 1",
        medium: "Acrylic Paint on Plywood, June 2023",
        className: "content-tall",
    },
    {
        src: "https://cdn.glitch.global/6d1c4a4a-688d-40d1-b9d2-95cd2223a252/IMG_7729.jpg?v=1693925464538",
        title: "Something Added to the Air Forever",
        medium: "Acrylic Paint on Wood, January 2023",
        className: "content-wide",
    },
    {
        src: "https://cdn.glitch.global/6d1c4a4a-688d-40d1-b9d2-95cd2223a252/IMG_0967.jpg?v=1693925458805",
        title: "This Beautiful Creature Must Die",
        medium: "Acrylic Paint on Canvas, June 2023",
        className: "content-wide",
    },
    {
        src: "https://cdn.glitch.global/6d1c4a4a-688d-40d1-b9d2-95cd2223a252/5_Natalie%20Jacobs_The%20Source.jpg?v=1682695152806",
        title: "The Source",
        medium: "Acrylic Paint on Wood, March 2023",
        className: "content-tall",
    },
    {
        src: "https://cdn.glitch.global/6d1c4a4a-688d-40d1-b9d2-95cd2223a252/ddsjbdhds.jpg?v=1665124671959",
        title: "Even From the Brother, There is No Comfort in the Dark Hour",
        medium: "Acrylic Paint on Wood, April 2022",
        className: "content-tall",
    },
    {
        src: "https://cdn.glitch.global/6d1c4a4a-688d-40d1-b9d2-95cd2223a252/crane-your-neck.jpeg?v=1682694810987",
        title: "Crane Your Neck",
        medium: "Oil Paint on Wood, April 2021",
        className: "content-wide",
    },
    {
        src: "https://cdn.glitch.global/6d1c4a4a-688d-40d1-b9d2-95cd2223a252/IMG_6978.jpg?v=1682695591978",
        title: "Cloth Mother",
        medium: "Oil Painting on Wood, March 2021",
        className: "content-wide",
    },
    {
        src: "https://cdn.glitch.global/6d1c4a4a-688d-40d1-b9d2-95cd2223a252/IMG_5498.jpg?v=1682695578442",
        title: "Symphony in Green",
        medium: "Acrylic Paint on Wood, January 2021",
        className: "content-tall",
    },
    {
        src: "https://cdn.glitch.global/6d1c4a4a-688d-40d1-b9d2-95cd2223a252/plea-for-tenderness.jpg?v=1682694402543",
        title: "Plea for Tenderness",
        medium: "Oil Paint on Wood, February 2021",
        className: "content-wide",
    },
    {
        src: "https://cdn.glitch.global/6d1c4a4a-688d-40d1-b9d2-95cd2223a252/IMG-8544.jpg?v=1682694972596",
        title: "The Simultaneity Principle",
        medium: "Oil Paint on Wood, December 2021",
        className: "content-wide",
    },
    {
        src: "https://cdn.glitch.global/6d1c4a4a-688d-40d1-b9d2-95cd2223a252/involuntarily-celibate.jpg?v=1682694666312",
        title: "Involuntarily Celibate",
        medium: "Oil Paint on Wood, May 2021",
        className: "content-wide",
    },
    {
        src: "assets/images/paint/bathroom kiss.jpg",
        title: "Bathroom Kiss",
        medium: "Acrylic Paint on Wood, 2021",
        className: "content-tall",
    },
    {
        src: "assets/images/paint/a mother intuition.jpg",
        title: "A Mother's Intuition",
        medium: "Oil Paint, Baby Teeth, and Stickers on Wood, 2021",
        className: "content-wide",
    },
    {
        src: "assets/images/paint/i have risen.jpg",
        title: "I Have Risen",
        medium: "Oil Paint on Canvas, 2020",
        className: "content-tall",
    },
    {
        src: "assets/images/paint/poppers soliloquoy.jpg",
        title: "Poppers Soliloquy",
        medium: "Oil Paint on Wood, 2021",
        className: "content-tall",
    },
    {
        src: "assets/images/paint/visitation.jpg",
        title: "Visitation",
        medium: "Acrylic Paint on Wood, 2020",
        className: "content-tall",
    },
    {
        src: "assets/images/paint/roller grrl.JPG",
        title: "Roller Grrl",
        medium: "Oil Paint on Wood, 2020",
        className: "content-tall",
    },
    {
        src: "https://cdn.glitch.global/6d1c4a4a-688d-40d1-b9d2-95cd2223a252/A647F2C5-4F00-4316-9E0A-B56630F5B667.jpg?v=1682695581540",
        title: "Isabella’s Secret Garden",
        medium: "Oil Paint on Canvas, 2020",
        className: "content-tall",
    },
    {
        src: "assets/images/paint/fresco.jpg",
        title: "Fresco",
        medium: "Fresco Painting, 2019",
        className: "content-tall",
    },
];

export function Painting() {
    return (
        <div>
            {paintings.map((painting, idx) => (
                <div key={idx}>
                    <img className={painting.className} src={painting.src} alt={painting.title} />
                    <br />
                    <p className="names">
                        <i>{painting.title}</i>
                    </p>
                    <p className="names">{painting.medium}</p>
                    <br /><br /><br />
                </div>
            ))}
        </div>
    );
}