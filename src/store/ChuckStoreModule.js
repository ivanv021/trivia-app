
import { chuckService  } from './../services/ChuckService'




export const ChuckStoreModule = {

    state: {

        
        randomJoke: ''


    },

    mutations: {

        setJoke(state, randomJoke) {

            state.randomJoke = randomJoke

        }




    },

    actions: {
        async getRandomJoke(context) {
            // try {
                const response = await chuckService.getRandomJoke()
                context.commit('setJoke', response.value)
                return response.value


            // } catch (error) { } // eslint-disable-line

        }




    },

    getters: {

        getJoke(state) {

            return state.randomJoke


        }


    }


}




