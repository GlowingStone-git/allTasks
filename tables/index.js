"use strict"

/// const dataSet = JSON.parse(data) with server
const dataSet = [
    {
        "id": "0",
        "user": "Mark",
        "login": "Mark195",
        "eMail": "mark@mail.ru",
        "fio": "Марк Маркович Марков",
        "dateOfBirth": "22.02.99"
    },
    {
        "id": "1",
        "user": "Park",
        "login": "Park4325",
        "eMail": "mark@mail.ru",
        "fio": "Марк Маркович Марков",
        "dateOfBirth": "22.02.99"
    },
    {
        "id": "2",
        "user": "Tark",
        "login": "Tark12414",
        "eMail": "mark@mail.ru",
        "fio": "Марк Маркович Марков",
        "dateOfBirth": "22.02.99"
    },
    {
        "id": "3",
        "user": "Vark",
        "login": "Vark4236",
        "eMail": "mark@mail.ru",
        "fio": "Марк Маркович Марков",
        "dateOfBirth": "22.02.99"
    },
    {
        "id": "4",
        "user": "Gark",
        "login": "Gark37854",
        "eMail": "mark@mail.ru",
        "fio": "Марк Маркович Марков",
        "dateOfBirth": "22.02.99"
    }
]

$(document).ready(function() {
    $('#tableContent').append(
    `<tbody>${dataSet.map(n =>
        `<tr id=${n.id}>
        <td data-id=${n.id}>${n.id}</td>
        <td data-user=${n.user}>${n.user}</td>
        <td data-login=${n.login}>${n.login}</td>
        <td data-eMail=${n.eMail}>${n.eMail}</td>
        <td data-fio=${n.fio}>${n.fio}</td>
        <td data-date=${n.dateOfBirth}>${n.dateOfBirth}</td>
        <td><button data-toggle='modal' data-target='#myModal' data-id=${n.id} class="edit-btn">Редактировать</button></td>
        </tr>`).join('')}
    </tbody>`
)});

$('#tableContent').on('click', '.edit-btn', function(){
    clear_modal(); 
    let arr = []; 
    let rowData = $(this).parents('tr').children();
    
    for(let i = 0; i < ($(this).parents('tr').children().length-1);i++){
      arr.push($(rowData[i]).text()); 
    }
    
    for(let i = 0; i <= arr.length; i++){
      $('input[name=col_'+ Number(i) +']').val(arr[i]);
    }
    
    $("#myModal").modal('show');
});

$('#edit-btn-confirm').click(function () {
    var id = $('.modal').find('input[name=col_0]').val();
    let newData = [];
    for (let i=0; i<6; i++) {
        newData.push($('.modal').find('input[name=col_'+ Number(i) +']').val());
    };
    $('#'+ id).each(function (index, el) {
        var $el = $(el);
        if ($el.find('td:first').text() === id) {    
            for (let i=1; i < 6; i++) {
                $el.find('td:nth-child('+Number(i+1)+')').text(newData[i]);
            }      
        }
    });
});

$('#btn-add').click(function () {
    clear_modal(); 
    $("#addModal").modal('show');
});

$('#add-btn-confirm').click(function () {
    let id = $('#addModal').find('input[name=col_0]').val();
    let newData = [];
    for (let i=0; i<6; i++) {
        newData.push($('#addModal').find('input[name=col_'+ Number(i) +']').val());
    };

    let lastId = Number($('tbody').find('tr:last').attr('id')) + Number(1);
    
    $("#tableContent").append(
        `<tr id=${lastId}>
          <td data-id=${lastId}>${lastId}</td>
          <td data-user=${newData[1]}>${newData[1]}</td>
          <td data-login=${newData[2]}>${newData[2]}</td>
          <td data-eMail=${newData[3]}>${newData[3]}</td>
          <td data-fio=${newData[4]}>${newData[4]}</td>
          <td data-date=${newData[5]}>${newData[5]}</td>
          <td><button data-toggle='modal' data-target='#myModal' data-id=${lastId} class="edit-btn">Редактировать</button></td>
        </tr>`);
});

function clear_modal() { 
    $('input[name=col_0]').val("");
    $('input[name=col_1]').val("");
    $('input[name=col_2]').val("");
    $('input[name=col_3]').val("");
    $('input[name=col_4]').val("");
    $('input[name=col_5]').val("");
}