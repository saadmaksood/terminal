const about = document.querySelector("#about")
const contact = document.querySelector("#contact")
const game = document.querySelector("#game")
const aboutContent = document.querySelector("#about-content")
const contactContent = document.querySelector("#contact-content")

about.addEventListener('click', () =>{
    const aboutBox = new WinBox({
        title: 'About Me',
        // modal:true,
        // border:"1px",
        width:'400px',
        height:'400px',
        top:50,
        right:50,
        bottom:50,
        left:50,
        html:"<div id='about-content'><h2>about-me:$<span class='cursor'>|</span></h2><p>Hello,<br/>I am a student as well as a Programmer. I mostly work on Python and Web Devlopment. I am also passionate about Ethical Hacking and i upload about hacking on my own <a href='https://learntermux.tech' target= _blank>blog</a> </p></div>",
        onfocus:function(){
            this.setBackground('#00aa00')
        },
        onblur:function(){
            this.setBackground('#777')
        },

    })
})
game.addEventListener('click', () =>{
    const aboutBox = new WinBox({
        title: 'Sanke Game',
        width:'400px',
        height:'400px',
        top:50,
        right:50,
        bottom:50,
        left:50,
        url: "https://minisnakegame.blogspot.com",
        onfocus:function(){
            this.setBackground('#00aa00')
        },
        onblur:function(){
            this.setBackground('#777')
        },

    })
})
contact.addEventListener('click', () =>{
    const contactBox = new WinBox({
        title: 'Contact Me',

        width:'400px',
        height:'400px',
        top:150,
        right:50,
        bottom:50,
        left:250,
        html:"<div id='contact-content'><h2>contact-me:$<span class='cursor'>|</span></h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea saepe soluta, sed sapiente asperiores a accusantiu.<ul><li>phone : 7045700281 </li><li>Email : khansaad1275@gmail.com </li></ul></p></div>",
        onfocus:function(){
            this.setBackground('#00aa00')
        },
        onblur:function(){
            this.setBackground('#777')
        },
    })
})