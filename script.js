document.addEventListener('DOMContentLoaded', () => {
    const postList = document.getElementById('post-list');
    const mainTitle = document.getElementById('main-title');
    const mainDate = document.getElementById('main-date');
    const mainContent = document.getElementById('main-content');
    
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');

    let allPosts = [];

    const toggleSidebar = (state) => {
        sidebar.classList.toggle('active', state);
        overlay.classList.toggle('active', state);
    };

    menuToggle.addEventListener('click', () => toggleSidebar(true));
    closeMenu.addEventListener('click', () => toggleSidebar(false));
    overlay.addEventListener('click', () => toggleSidebar(false));

    fetch('posts.json')
        .then(res => res.json())
        .then(posts => {
            allPosts = posts;
            renderMenu(posts);
            if(posts.length > 0) displayPost(posts[0].id);
        })
        .catch(() => {
            mainTitle.textContent = "Xatolik yuz berdi";
        });

    function renderMenu(posts) {
        postList.innerHTML = '';
        posts.forEach(post => {
            const li = document.createElement('li');
            li.textContent = post.title;
            li.onclick = () => {
                displayPost(post.id);
                toggleSidebar(false);
            };
            postList.appendChild(li);
        });
    }

    async function displayPost(id) {
        const postInfo = allPosts.find(p => p.id === id);
        if(postInfo) {
            mainTitle.textContent = postInfo.title;
            mainDate.textContent = postInfo.date;
            
            try {
                const response = await fetch(`posts/${postInfo.file}`);
                const markdownText = await response.text();
                mainContent.innerHTML = marked.parse(markdownText);
            } catch (err) {
                mainContent.innerHTML = "<p>Maqola matnini yuklashda xatolik.</p>";
            }
            
            window.scrollTo(0, 0);
        }
    }
});
