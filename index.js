$('#submit').click(function () {
    var val = $('#inp').val();
    if (val) {
        render('self', val);
        $('#inp').val('');
        $.ajax({
            method: 'GET',
            url: 'https://developer.duyiedu.com/edu/turing/chat',
            data: {
                text: val
            },
            dataType: 'json',
            success: function (res) {
                console.log(res)
                console.log(res.text)
                render('robert', res.text);
            }
        })
    }
});
$('#inp').on('keyup', function (e) {
    //  console.log(e.keyCode)
    // {user: {name: '', id: '', avatar:'' }, text: 'dd'}
    if (e.keyCode == 13) {
        $('#submit').click()
    }
 })
function render(role, text) {
    $(`<div class="${role}">
    <img src="./img/${role}.jpg" alt="">
    <p>${text}</p>
</div>`).appendTo($('.chat'));
    var scrollHeight = $('.chat')[0].scrollHeight;
    var contentHeight = $('.chat')[0].offsetHeight;
    $('.chat').scrollTop(scrollHeight - contentHeight)
}