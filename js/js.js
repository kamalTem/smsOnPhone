$(document).ready(function(){
	$(".glyphicon-chevron-up").click(function(){
		if($(this).hasClass("glyphicon-chevron-up")){
			$(this).removeClass("glyphicon-chevron-up");
			$(this).addClass("glyphicon-chevron-down");
			rows.sort(function(a,b){
				var a = parseInt($(keySelector, a).text().replace("$",''));
        		var b = parseInt($(keySelector, b).text().replace("$",''));
   				return (a.price < b.price) ? 1 : (a.price > b.price ? -1 : 0);
  			});
   			
		}
		else{
			$(this).removeClass("glyphicon-chevron-down");
			$(this).addClass("glyphicon-chevron-up");
			rows.sort(function(a,b){
				var a = $(keySelector, a).text();
        		var b = $(keySelector, b).text();
   				return (a.price < b.price) ? -1 : (a.price > b.price ? 1 : 0);
  			 });
			}
			generateTable(rows);
	});

	var rows = [
		{name:"tovar1",count:4,price:50.50},
		{name:"tovar2",count:1,price:76.55},
		{name:"tovar3",count:2,price:32.23},
	];
	function generateTable(rows){
		$("#table tbody").html("");
		for(var i = 0; i < rows.length;i++){
			$("#table tbody").append('<tr id="row'+i+'">'+
       '<td class="name" id="name" ><a href="url">'+rows[i].name+'</a></td>'+
       '<td class="count" id="count" >'+rows[i].count+'</a></td>'+
       '<td class="price" id="price">'+rows[i].price+'</td>'+
       '<td>'+
			'<button type="button" class="btn btn-default myBtn">Edit</button>'+
 			'<button type="button" class="btn btn-default myBtndel" data-id="'+i+'">Delete</button>'+
       '</td>'+
       '</tr>');
			
		}
	}
	generateTable(rows);

	//удаляем строки

	
	$("#table").on('click','.myBtndel',function(){
    $("#myModal").modal();
    $("#yes").attr("data-id",$(this).attr("data-id"));
	});
    $("#yes").click(function(){
    	 $("#yes")
    });  	  
	/*$("#table").on('click','#myBtndel',function(){
		$("#myModal").modal();
        $(this).closest('tr').remove();
     });*/
	//добавляем строки	
	$("#table").on('click','.myBtn',function(){
       $("#myModal1").modal();
       $('.btn.btn-success.btn-block').on('click', function(){
    		var row = $('.name:last');
    		row.clone().insertAfter(row);
  });
     });

/*function addHtmlTableRow(){
	//создание новых строк ,получение ввалуе из инпута текста
	// и его установка в строки
	var tabe = document.getElementById("table"),
		newRow = table.insertRow(table.length),
		cell1 = newRow.insertCell(0),
		cell2 = newRow.insertCell(1),		
		fname = document.getElementById("usrname").value,
		fname = document.getElementById("usrprice").value;
	cell1.innerHTML = name;	
	cell2.innerHTML = price;	
}*/

$(function(){
	$('#btn-add').click(function(){
		var _name = $('input[name="usrname"]').val();
		var _count = $('input[name="usrcount"]').val();
		var _price = $('input[name="usrprice"]').val();
		
		var _tr = '<tr><td>'+_name+'</td> <td>'+_count+'</td> <td>'+_price+'</td>'+
       '<td>'+
			'<button type="button" class="btn btn-default myBtnEdit">Edit</button>'+
 			'<button type="button" class="btn btn-default myBtndel">Delete</button>'+
       '</td>'+
       '</tr>';
		$('tbody').append(_tr);
	});
});
//изменение товара edit

$(document).on('click','btn-add',function(){
	alert(1);
});
/*	//сортировка по алфавиту
	function sortUsingNestedText(parent, childSelector, keySelector) {
    var items = parent.children(childSelector).sort(function(a, b) {

        if(keySelector=='span.price')
        {
        var vA = parseInt($(keySelector, a).text().replace("$",''));
        var vB = parseInt($(keySelector, b).text().replace("$",''));
        return (vA < vB) ? -1 : (vA > vB) ? 1 : 0;
    }
                                                    else
                                                    {
                                                                var vA = $(keySelector, a).text();
        var vB = $(keySelector, b).text();
        return (vA < vB) ? -1 : (vA > vB) ? 1 : 0;
                                                    }
    });
    parent.append(items);
}

 сортировать по аттр  
$('#table').attr("sortKey");
$('#table').data("sortKey", "span.name");


 сортировать по нажатию на кнопку */


});
	
