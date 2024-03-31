let ProdukPerempuan = document.querySelector(".Produk-Perempuan");
let ProdukPria = document.querySelector(".Produk-Pria");

function showPria() {
    ProdukPerempuan.style.display = "none";
    ProdukPria.style.display = "block"
}
function showPerempuan() {
    ProdukPerempuan.style.display = "block"
    ProdukPria.style.display = "none";
    
}