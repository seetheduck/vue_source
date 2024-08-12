const {createApp} = Vue;

createApp({
    data() {
        return {
            list : ['아아', '제로콜라', '오렌지쥬스', '삼겹살'],
            objArr : [
                {site:'양양', taketime:'3시간'},
                {site:'청산도', taketime:'6시간'},
                {site:'인천', taketime:'1.5시간'},
            ],
            myArr : ['일','이','삼','사','오'],
            numArr : [1, 2, 3, 4, 5],
        }
    },
    methods: {
        addList(){
            this.myArr.push('추가');
        },
        addListIndex(arg){
            this.myArr.splice(arg, 0, '삽입');  // splice : 배열 요소를 제거하고 새 요소로 대체하는 함수
        },
        changeList(arg){
            this.myArr.splice(arg, 1, '변경');
        },
        deleteList(arg){
            this.myArr.splice(arg, 1);
        },
    },
}).mount('#app')