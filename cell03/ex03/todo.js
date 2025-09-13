let container = document.getElementById("ft_list");

function readCookie() {
    let cookie = document.cookie.split(";");
    let array = [];
    if (cookie) {
        for (let i of cookie) {
            let cell = i.split("=");
            if (cell[0] == 'todo') {
                let array = JSON.parse(cell[1]);
                for (let i = 0; i < array.length; i++) {
                    Create(array[i]);
                }
            }
        }
    }
    console.log( array);
}

function setCookie() {
    let length = container.children.length;
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(container.children[i].innerHTML);
    }
    console.log("Set Cookie:", array);
    document.cookie = "todo=" + JSON.stringify(array) + "; path=/";
}

function CreateNew() {
    let name = prompt("What's next?");
    Create(name);
}

function Create(name) {
    if (name != "") {
        let newdiv = document.createElement("div");
        newdiv.innerHTML = name;
        newdiv.className = "todo";
        newdiv.onclick = function () {
            Remove(newdiv);
        };

        container.append(newdiv);
    }
    check();
}

function check() {
    if (container.children.length > 0) {
        container.style.display = 'flex';
    } else {
        container.style.display = 'none';
    }
    setCookie();
}

function Remove(ele) {
    if (confirm("Remove this?")) {
        if (ele) {
            ele.remove();
        }
        check();
    }

}

readCookie();