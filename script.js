$(document).ready(function () {
    $('#ime').focusout(function () {
        if ($('#ime').val().length === 0) {
            console.log("greska");
            $('#greska1').text("*Username required");
            $('#greska1').addClass('greska')
        }
        else {
            $('#greska1').empty();
            $('#greska1').removeClass('greska')
        }
    });

    $('#email').focusout(function () {
        if ($('#email').val().length === 0) {
            if ($('#email').next().is('.greska')) { }
            else {
                var div = document.createElement('div');
                div.classList.add('greska');
                div.textContent = "*Email required";
                $('#email').after(div);
            }
        }
        else if ($('#email').next().is('.greska')) {
            $('#email').next().remove();
            $('#email').next().removeClass('greska');
            console.log("popunjen");
        }
    });

    $('#sifra').on("input", function () {
        if ($('#sifra').val().length < 5) {
            if ($('#sifra').next().is('.greska')) { }
            else {
                var div = document.createElement('div');
                div.classList.add('greska');
                div.textContent = "*Password needs to be at least 5 characters";
                $('#sifra').after(div);
                console.log("nema dovoljno");
            }
        }
        else if ($('#sifra').next().is('.greska')) {
            $('#sifra').next().remove();
            $('#sifra').next().removeClass('greska');
            console.log("ima dovoljno");
        }
    });

    $('#vesti').change(function () {
        if ($('#vesti').prop("checked")) {
            console.log("pomeri");
            $("#divOblast").slideDown(1000);
        }
        else {
            $("#divOblast").slideUp(1000);
        }
    });

    $('#forma').submit(function (ev) {
        if ($('#sifra').val()!==$('#proveriSifru').val() || $('#sifra').val().length<5 || $('#proveriSifru').val().length<6)
        {
            console.log("greska");
            var div = document.getElementById('izvestaj');
            div.textContent="Password needs to be at least 5 characters";
            div.classList.add('greska');
            ev.preventDefault();
        }
        else
        {
            var div = document.getElementById('izvestaj');
            div.textContent="";
            div.classList.remove('greska');
        }

        if($('#vesti').prop("checked"))
        {
            if($('#izaberiOblast option:selected').val()=="default")
            {
                ev.preventDefault();
                window.confirm("Chose a field!");
            }
            else
            {
                window.confirm("You chose " + ($('#izaberiOblast option:selected').val()));
            }
        }
    })
});
/*Sledece: Pri slanju podataka iz formulara: */ 
