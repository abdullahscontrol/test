const skillData = [

    { book: "Harrypoter" }, { author: "JK Rowling" }
];

console.log(skillData.book)

// {
//     name: "HTML+CSS",
//     photo: "html-css-emoji.png"
// },
// {
//     name: "JAVASCRIPT",
//     photo: "html-css-emoji.png"
// },
// {
//     name: "Web Design",
//     photo: "html-css-emoji.png"
// },
// {
//     name: "Git and Github",
//     photo: "html-css-emoji.png"
// },
// {
//     name: "REACT",
//     photo: "html-css-emoji.png"
// }


function Header() {
    return (
        <div className='header'>
            <div><h1><span id="media">Middle<span id="site">media!</span></span></h1>
            </div>
            <div><img src='menu-icon.png' alt='menu' /> </div>
        </div>
    );
}

export default Header;