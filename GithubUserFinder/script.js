async function getUser(username) {
    userdetail.textContent = "";

    let response = await fetch(`https://api.github.com/users/${username}`);
    if (response.status === 404) {
        let notFound = document.createElement("p");
        notFound.className="nouser";
        notFound.textContent = "No user found";
        userdetail.appendChild(notFound);
        return;
    }
    let data = await response.json();

    let newrow = document.createElement("div");
    newrow.className = "userdata";

    let profileSide = document.createElement("div");
    profileSide.className = "profile-side";

    let pfp = document.createElement("img");
    pfp.className = "profileimg";
    let pfpimg = data.avatar_url
    pfp.src = pfpimg;
    profileSide.appendChild(pfp);
    
    let profilelink = document.createElement("a");
    profilelink.className = "profilelink";
    profilelink.href = data.html_url;
    profilelink.textContent = "View Profile";
    profileSide.appendChild(profilelink);

    let infoGrid = document.createElement("div");
    infoGrid.className = "info-grid";

    let namebox = document.createElement("div");
    namebox.className = "name-box";
    let namelabel = document.createElement("p");
    namelabel.className = "stat-label";
    namelabel.textContent = "Name";
    let namevalue = document.createElement("p");
    namevalue.className = "stat-value";
    namevalue.textContent = data.name;
    namebox.appendChild(namelabel);
    namebox.appendChild(namevalue);
    infoGrid.appendChild(namebox);

    let unamebox = document.createElement("div");
    unamebox.className = "uname-box";
    let unamelabel = document.createElement("p");
    unamelabel.className = "stat-label";
    unamelabel.textContent = "Username";
    let unamevalue = document.createElement("p");
    unamevalue.className = "stat-value";
    unamevalue.textContent = data.login;
    unamebox.appendChild(unamelabel);
    unamebox.appendChild(unamevalue);
    infoGrid.appendChild(unamebox);

    let locationbox = document.createElement("div");
    locationbox.className = "location-box";
    let locationlabel = document.createElement("p");
    locationlabel.className = "stat-label";
    locationlabel.textContent = "Location";
    let locationvalue = document.createElement("p");
    locationvalue.className = "stat-value";
    locationvalue.textContent = data.location;
    locationbox.appendChild(locationlabel);
    locationbox.appendChild(locationvalue);
    infoGrid.appendChild(locationbox);

    let publicrepobox = document.createElement("div");
    publicrepobox.className = "publicrepo-box";
    let publicrepolabel = document.createElement("p");
    publicrepolabel.className = "stat-label";
    publicrepolabel.textContent = "Public Repositories";
    let publicrepovalue = document.createElement("p");
    publicrepovalue.className = "stat-value";
    publicrepovalue.textContent = data.public_repos;
    publicrepobox.appendChild(publicrepolabel);
    publicrepobox.appendChild(publicrepovalue);
    infoGrid.appendChild(publicrepobox);

    let followersbox = document.createElement("div");
    followersbox.className = "followers-box";
    let followerslabel = document.createElement("p");
    followerslabel.className = "stat-label";
    followerslabel.textContent = "Followers";
    let followersvalue = document.createElement("p");
    followersvalue.className = "stat-value";
    followersvalue.textContent = data.followers;
    followersbox.appendChild(followerslabel);
    followersbox.appendChild(followersvalue);
    infoGrid.appendChild(followersbox);

    let followingbox = document.createElement("div");
    followingbox.className = "following-box";
    let followinglabel = document.createElement("p");
    followinglabel.className = "stat-label";
    followinglabel.textContent = "Following";
    let followingvalue = document.createElement("p");
    followingvalue.className = "stat-value";
    followingvalue.textContent = data.following;
    followingbox.appendChild(followinglabel);
    followingbox.appendChild(followingvalue);
    infoGrid.appendChild(followingbox);

    newrow.appendChild(profileSide);
    newrow.appendChild(infoGrid);
    userdetail.appendChild(newrow);
}

const user = document.getElementById("username");
const button = document.getElementById("button");
const userdetail = document.querySelector(".userdata")
button.addEventListener("click", function () {
    getUser(user.value);
    user.value="";  
});
