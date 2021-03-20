var data = {
    message: 'Hello Vue!'
}
var app = new Vue({
    el: '#app',
    data: data
});
app.$watch("message", function (newValue, oldValue) {
    console.log(newValue, oldValue)
})
data.message = "Hello function"