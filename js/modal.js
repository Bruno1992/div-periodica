$(document).ready(function(){
  //var pag = window.location.pathname;
  //pag = pag.split("/");
  //switch(pag[5]){
    //case 'index.html':
    modal();
    //break; 
  //}
});

function modal(){
  $('#btn_h').click(function(e) {
    e.preventDefault();
    $('#title_modal').text('Hidrogênio');
    $('#modal_num_atomico').val('1');
    $('#modal_img').html("<img src='imagens/hidrogenio.jpg' id='img_modal'>");
    $('#modal_origem').val('Natural');
    $('#modal_descoberto').val("Cavendish / 1766 - Robert Boyle / 1671 (Inglaterra)");
    $('#modal_origem_nome').val("Do grego Hydro, 'gerar água'");
    $('#modal_massa_atomica').val("1,00794(7)");
    $('#modal_volume_atomico').val("14,1 cm³/mol");
    $('#modal_densidade').val("0,0899 g/cm³");
    $('#modal_fusao').val("-259,14 °C");
    $('#modal_ebulicao').val("-252,87 °C");
    $('#modal_cntp').val("Gasoso");
    $('#modal_rede_critalografica').val("Hexagonal Compacta");
    $('#modal_raio_atomico').val("2,08 Åa");
    $('#modal_eletronegatividade').val("2,20");
    $('#modal_ionizacao').val("13,598 V");
    $('#modal_raio_covalente').val("0,32 Å");
    $('#modal_raio_ionico').val("2,08E-1 Å");
    $('#modal_camadas').val("1");
    $('#modal_condutividade_aletrica').val("-");
    $('#modal_configuracao_eletronica').val("1s1");
    $('#modal_orbital').val("1s1");
    abrir_modal();
  });
  
    $('#btn_li').click(function(e) {
        e.preventDefault();
        $('#title_modal').text('Lítio');
        $('#modal_num_atomico').val('3');
        $('#modal_img').html("<img src='imagens/litio.jpg' id='img_modal'>");
        $('#modal_origem').val('Natural');
        $('#modal_descoberto').val("August Arfvedson / 1818");
        $('#modal_origem_nome').val("Do grego Lithos, 'pedra'");
        $('#modal_massa_atomica').val("[6,941(2)]");
        $('#modal_volume_atomico').val("13,1 cm³/mol");
        $('#modal_densidade').val("0,53 g/cm³");
        $('#modal_fusao').val("180,54 °C");
        $('#modal_ebulicao').val("1347 °C");
        $('#modal_cntp').val("Sólido");
        $('#modal_rede_critalografica').val("Cúbica de Corpo Centrado");
        $('#modal_raio_atomico').val("1,55 Å");
        $('#modal_eletronegatividade').val("0,98");
        $('#modal_ionizacao').val("5,392 V");
        $('#modal_raio_covalente').val("1,23 Å");
        $('#modal_raio_ionico').val("0,60E+1 Å");
        $('#modal_camadas').val("2,1");
        $('#modal_condutividade_aletrica').val("11,7 E6/ohms/m");
        $('#modal_configuracao_eletronica').val("[He] 2s1");
        $('#modal_orbital').val("2s1");
        abrir_modal();
    });

    $('#btn_na').click(function(e) {
        e.preventDefault();
        $('#title_modal').text('Sódio');
        $('#modal_num_atomico').val('11');
        $('#modal_img').html("<img src='imagens/sodio.jpg' id='img_modal'>");
        $('#modal_origem').val('Natural');
        $('#modal_descoberto').val("Humphry Davy / 1807");
        $('#modal_origem_nome').val("Do grego Nítron, 'carbonato de soda'");
        $('#modal_massa_atomica').val("22,98976928(2)");
        $('#modal_volume_atomico').val("23,7 cm³/mol");
        $('#modal_densidade').val("0,97 g/cm³");
        $('#modal_fusao').val("97,8 °C");
        $('#modal_ebulicao').val("882,9 °C");
        $('#modal_cntp').val("Sólido");
        $('#modal_rede_critalografica').val("Cúbica de Corpo Centrado");
        $('#modal_raio_atomico').val("1,9 Å");
        $('#modal_eletronegatividade').val("0,93");
        $('#modal_ionizacao').val("5,139 V");
        $('#modal_raio_covalente').val("1,54 Å");
        $('#modal_raio_ionico').val("0,95E+1 Å");
        $('#modal_camadas').val("2,8,1");
        $('#modal_condutividade_aletrica').val("20,1 E6/ohms/m");
        $('#modal_configuracao_eletronica').val("[Ne] 3s1");
        $('#modal_orbital').val("3s1");
        abrir_modal();
    });
    $('#btn_k').click(function(e) {
        e.preventDefault();
        $('#title_modal').text('Potássio');
        $('#modal_num_atomico').val('19');
        $('#modal_img').html("<img src='imagens/potassio.jpg' id='img_modal'>");
        $('#modal_origem').val('Natural');
        $('#modal_descoberto').val("Humphry Davy / 1807");
        $('#modal_origem_nome').val("Do lat. científico potassium");
        $('#modal_massa_atomica').val("39,0983(1)");
        $('#modal_volume_atomico').val("45,3 cm³/mol");
        $('#modal_densidade').val("0,86 g/cm³");
        $('#modal_fusao').val("63,65 °C");
        $('#modal_ebulicao').val("774 °C");
        $('#modal_cntp').val("Sólido");
        $('#modal_rede_critalografica').val("Cúbica de Corpo Centrado");
        $('#modal_raio_atomico').val("2,35 Å");
        $('#modal_eletronegatividade').val("0,82");
        $('#modal_ionizacao').val("4,341 V");
        $('#modal_raio_covalente').val("2,03 Å");
        $('#modal_raio_ionico').val("1,33E+1 Å");
        $('#modal_camadas').val("2,8,8,1");
        $('#modal_condutividade_aletrica').val("16,4 E6/ohms/m");
        $('#modal_configuracao_eletronica').val("[Ar] 4s1");
        $('#modal_orbital').val("4s1");
        abrir_modal();
    });

  $('.window .close').click(function (e) {
    e.preventDefault();
    $('.window').hide();
  });
}



function abrir_modal(){
  $('#dialog').slideDown(1000).draggable();
}

