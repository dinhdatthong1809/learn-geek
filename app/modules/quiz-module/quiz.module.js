import { QuizListComponent } from './quiz-list/quiz-list.component.js'
import { QuizCardComponent } from './quiz-list/quiz-card/quiz-card.component.js'
import { QuizService } from './quiz.service.js';

export let quizModule = angular.module('quizModule', []);

/* Components */
quizModule
    .component("appQuizList", QuizListComponent)
    .component("appQuizCard", QuizCardComponent)
    ;

/* Services */
quizModule
    .service('quizService', QuizService)
    ;