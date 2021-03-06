$(function(){
    $('.table .item').click(function(event){
        event.preventDefault();
        var href = '/item/details/?id=' + $(this).attr('id');

        $.get(href, function(item, status){
            $('.itemForm #header')
                .attr('class', 'modal-header modal-dark ' + item.rarity.toLowerCase())
            $('.itemForm #name').text(item.name);
            var details = item.rarity;
            details += ' ' + item.type;
            details = details.replace(/\_/g, ' ').toLowerCase();
            $('.itemForm #itemDetails')
                .text(details)
                .addClass('text-capitalize')
            $('.itemForm #description').text(item.description);
            $('.itemForm #weight').text(item.weight + ' lb.');
            $('.itemForm #cost').text('$' + item.value);
            $("#addToCart").val(item.id)
        });

//        $('.itemForm #itemModal').modal({backdrop: false});
        $('.itemForm #itemModal').modal();
    });
});

$(function(){
    $('#addToCart').click(function(event){
        event.preventDefault();
        var href = '/item/details/?id=' + $(this).val();
//        var total = +($('#total').find('.number').text());
//        var weight = +($('#tradeWeight').find('.number').text());
        var total = +($('#total').text());
        var weight = +($('#tradeWeight').text());

        $.get(href, function(item, status){
            $('#total').text(total + item.value)
            $('#tradeWeight').text(weight + item.weight)
            $('#tradeTable > tbody')
                .append($('<tr>')
                    .attr('class', 'buy border-warning item ' + item.rarity.toLowerCase())
                    .append($('<td>')
                        .text(item.name)
                )
                    .append($('<td>')
                        .text(item.weight + ' lb.')
                )
                    .append($('<td>')
                        .text('$' + item.value)
                )
            );
        });
    });
});

$(function capitalize(string){

});