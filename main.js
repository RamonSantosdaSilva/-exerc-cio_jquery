$(document).ready(function(){ 


$('form').on('submit', function(e){
    e.preventDefault();

    const atualizaTarefa = $('#atualiza-tarefa').val(); 
    const novaTarefa = $(`<li>${atualizaTarefa} <i class="checked-list"> </i> </li>`);
    $(novaTarefa).appendTo('ul');
    $(novaTarefa).fadeIn(1000);
    $('#atualiza-tarefa').val('');
})

    $(document).on('click', 'li', function(){
        $(this).toggleClass('concluida');
    });

})