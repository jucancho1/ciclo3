function registro() {
    var elemento = {
        id: $("#id").val(),
        brand: $("#brand").val(),
        model: $("#model").val(),
        category_id: $("#category_id").val(),
        name: $("#name").val()

    };


    var dataToSend = JSON.stringify(elemento);

    $.ajax(
        {
            dataType: 'json',
            data: elemento,
            url: "https://gf8d1d8e3ba1f4a-db202110012042.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike",
            type: 'POST',
            success: function (response) {
                console.log(response);
            },
            error: function (jqXHR, textStatus, errorThrown) { }


        });
}

function obtenerItems() {

    $.ajax({
        dataType: 'json',
        url: "https://gf8d1d8e3ba1f4a-db202110012042.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike",
        type: 'GET',

        success: function (response) {

            var misItems = response.items;

            for (i = 0; i < misItems.length; i++) {

                $("#miResultado").append("<tr>");
                $("#miResultado").append("<td>" + misItems[i].id + "</td>");
                $("#miResultado").append("<td>" + misItems[i].brand + "</td>");
                $("#miResultado").append("<td>" + misItems[i].model + "</td>");
                $("#miResultado").append("<td>" + misItems[i].category_id + "</td>");
                $("#miResultado").append("<td>" + misItems[i].name + "</td>");
                $("#miResultado").append('<td><button onclick="borrar(' + misItems[i].id + ')">Borrar</button></td>');
                $("#miResultado").append('<td><button onclick="obtenerItemEspecifico(' + misItems[i].id + ')">Cargar</button></td>');
                $("#miResultado").append("</tr>");

            }

        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

}



function borrar(idElemento) {
    var elemento = {
        id: idElemento
    };


    var dataToSend = JSON.stringify(elemento);
    //JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data: dataToSend,
        url: "https://gf8d1d8e3ba1f4a-db202110012042.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike",
        type: 'DELETE',
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });
}


function obtenerItemEspecifico(id) {
    $.ajax({
        dataType: 'json',
        url: "https://gf8d1d8e3ba1f4a-db202110012042.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike/" + id,
        type: 'GET',
        success: function (response) {
            console.log(response);
            var item = response.items[0];

            $("#id").val(item.id);
            $("#brand").val(item.brand);
            $("#model").val(item.model);
            $("#category_id").val(item.category_id);
            $("#name").val(item.name);




        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

}


function actualizar() {
    var elemento = {
        id: $("#id").val(),
        brand: $("#brand").val(),
        model: $("#model").val(),
        category_id: $("#category_id").val(),
        name: $("#name").val()
    }


    var dataToSend = JSON.stringify(elemento);
    //JSON= JavaScript Object Notation
    $.ajax({
        dataType: 'json',
        data: dataToSend,
        contentType: 'application/json',
        url: "https://gf8d1d8e3ba1f4a-db202110012042.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike",
        type: 'PUT',

        success: function (response) {
            console.log(response);
        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });

}
