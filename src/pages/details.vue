<template>
    <div>
        <Header />
        <section class="feature">
            <div class="title-text">
                <p>PM RESTAURANTS</p>
                <h5 class="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
            </div>

            <div class="container">
                <div class="card mb-3">
                    <img src="@/assets/images/restau2.jpg" class="card-img-top cardimage" alt="...">
                    <div class="card-body text-center">
                        <h5 class="card-title">About PM</h5>
                        <p class="card-text p-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Assumenda mollitia sequi beatae molestias accusantium voluptate dolore
                            Fugiat, ducimus modi ea nulla debitis doloremque neque qui eveniet.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Assumenda mollitia sequi beatae molestias accusantium voluptate dolore
                            Fugiat, ducimus modi ea nulla debitis doloremque neque qui eveniet.
                        </p>
                        <div class="d-flex gap-2 justify-content-end  italic text-success">
                            <p class="">Email:pm2000@gmail.com</p>
                            <p class="">location:Osu</p>
                            <p class="">Tell:0592286843 024503788</p>
                            <p class="">website:www.pmrestau.com</p>
                        </div>



                        <hr>
                        <div class="d-flex justify-content-between ">
                            <p>Ratings <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gold"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gold"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gold"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gold"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gold"
                                    class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </p>
                            <!-- Button trigger modal -->
                            <b-button class="btn btn-success" @click="modalShow = !modalShow">Leave a Review</b-button>

                            <!-- Modal -->
                            <b-modal title="Your Feedback" v-model="modalShow">
                                <form>
                                    <div class="mb-3">
                                        <label for="name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Your Name">
                                        <div id="emailHelp" class="form-text">We'll never share your email with anyone
                                            else.</div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="emailHelp"
                                            placeholder="Your Email">
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Leave a comment</label>
                                        <textarea type="password" class="form-control" id="exampleInputPassword1"
                                            placeholder="comment here"></textarea>
                                    </div>
                                    <!-- <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div> -->
                                </form>
                                <template #modal-footer>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </template>
                            </b-modal>
                            <!-- <button type="button" class="btn btn-success">Leave a Review</button> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- OUR SPECIALTIES -->
        <section class="feature">
            <div class="title-text">
                <p>OUR SPECIALTIES</p>
                <h5 class="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
            </div>
            <div style="width: 100%; height: 50%; display:flex; justify-content:center;">
                <div style="width: 800px;">
                    <b-carousel id="carousel-1" v-model="slide" :interval="1000" controls indicators
                        background="#ababab" img-width="500" img-height="480" style="text-shadow: 1px 1px 2px #333;"
                        @sliding-start="onSlideStart" @sliding-end="onSlideEnd">

                        <b-carousel-slide>
                            <template #img>
                                <img class="d-block img-fluid w-100 sliderImage" width="1024" height="480"
                                    src="@/assets/images/beef.jpg" alt="image slot">
                            </template>
                        </b-carousel-slide>

                        <b-carousel-slide>
                            <template #img>
                                <img class="d-block img-fluid w-100 sliderImage" width="1024" height="480"
                                    src="@/assets/images/profile.jpg" alt="image slot">
                            </template>
                        </b-carousel-slide>

                        <b-carousel-slide>
                            <template #img>
                                <img class="d-block img-fluid w-100 sliderImage" width="1024" height="480"
                                    src="@/assets/images/beef2.jpg" alt="image slot">
                            </template>
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <template #img>
                                <img class="d-block img-fluid w-100 sliderImage" width="1024" height="480"
                                    src="@/assets/images/james-frewin-CzD0EHabuzE-unsplash.jpg" alt="image slot">
                            </template>
                        </b-carousel-slide>
                        <b-carousel-slide>
                            <template #img>
                                <img class="d-block img-fluid w-100 sliderImage" width="1024" height="480"
                                    src="@/assets/images/lily-banse--YHSwy6uqvk-unsplash (1) 2.jpg" alt="image slot">
                            </template>
                        </b-carousel-slide>
                    </b-carousel>

                    <b-carousel-slide>
                        <template #img>
                            <img class="d-block img-fluid w-100" width="1024" height="480"
                                src="@/assets/images/irene.jpg" alt="image slot">
                        </template>
                    </b-carousel-slide>

                </div>


            </div>

        </section>




        <Footer />
    </div>
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
export default {
    components: {
        Header,
        Footer
    },
    data() {
        return {
            modalShow: false,
            slide: 0,
            sliding: null
        }
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        }
    }

}
</script>

<style scoped>
.cardimage {
    max-height: 350px;
    object-fit: cover;
}

.italic {
    font-family: 'kaushan Script';
}

.sliderImage {
    height: 500px;
    width: 300px;
    object-fit: cover;
    border-radius: 10px;

}
</style>