const content = [
  {
    id: "english",
    title: "English Language",
    image: "english_icon.jpg",
    footer: ""
  },
  { id: "intscience",
    title: "Integrated Science",
    image: "introtech_icon.png",
    footer: ""
  },
  { 
    id: "introtech",
    title: "Introductory Technology",
    image: "intscience_icon.jpg",
    footer: ""
  },
]

const userPage = (req, res) => {
    if (req.session.user) {
      return res.redirect("/dashboard");
    }
    res.render("user",{
      content:content
    })
  };

export default {content, userPage}