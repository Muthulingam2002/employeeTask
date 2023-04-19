const postdata = async (data) => {
    const res = await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
};

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
    let ndb = new Date(data.dob).getFullYear()
    let ndj=new Date(data.doj).getFullYear()
    data.dob = ndb;
    data.doj = ndj;
    data.pastexp = Number(data.pastexp.trim());
    postdata(data);
});
