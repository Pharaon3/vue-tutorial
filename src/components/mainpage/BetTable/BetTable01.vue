<template>
    <div class="bettable01">
        <div class="bettable01-teamNames">
            <div> MIA Marlins (Home team) </div>
            <div> COL Rockies (Away team) </div>
        </div>
        <div class="bettable01-score">
            <div> 3 </div>
            <div> 5 </div>
        </div>
        <div class="bettable01-betbuttons">
            <div class="around">
                <div class="bettable01-betbutton"> +1.5 </div>
                <div class="bettable01-betbutton"> +235 </div>
            </div>
            <div class="around">
                <div class="bettable01-betbutton"> -1.5 </div>
                <div class="bettable01-betbutton"> -300 </div>
            </div>
        </div>
        <div class="bettable01-betbuttons">
            <div class="around">
                <div class="bettable01-betbutton"> +1.5 </div>
                <div class="bettable01-betbutton"> +235 </div>
            </div>
            <div class="around">
                <div class="bettable01-betbutton"> -1.5 </div>
                <div class="bettable01-betbutton"> -300 </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    components: {
    },
    props: {
        // label: { required: true, type: String },
    },
    data() {
        return {
            // isDone: this.done,
        }
    }
};
</script>
<style>
.around {
    display: flex;
    justify-content: space-around;
}

.bettable01-betbutton {
    background-color: #555;
    color: #eee;
    font-size: 16px;
    padding: 10px 20px;
    width: 100%;
    margin: 2px 5px;
}

.bettable01-betbuttons {
    /* background-color: #555; */
    color: #eee;
    font-size: 16px;
    /* padding: 10px 20px; */
    width: 100%;
    /* margin: 2px 5px; */
}

.bettable01-score {
    color: yellow;
    font-size: 16px;
    width: 30px;
    padding-right: 20px;
}

.bettable01-score div {
    display: flex;
    align-items: center;
    height: 40px;
}

.bettable01-teamNames {
    color: white;
    font-size: 16px;
    width: 100%;

}

.bettable01 {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.bettable01-teamNames div {
    height: 40px;
    display: flex;
    align-items: center;
}</style>