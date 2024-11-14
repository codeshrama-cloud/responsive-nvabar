function showsidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hidesidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

document.getElementById('openSidebar').addEventListener('click', showsidebar);
document.getElementById('closeSidebar').addEventListener('click', hidesidebar);

window.addEventListener('resize', function() {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.menu-button');

    if (window.getComputedStyle(menuButton).display === 'none') {
        sidebar.style.display = 'none';
    }
});