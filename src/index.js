/**\
 * @file 원티드 프리온보딩 프론트엔드 챌린지 - Typescript
 * @author onezeun <onezeun@kakao.com>
 * @see <a href="https://github.com/onezeun/wanted-pre-onboarding-challenge-fe-2" >https://github.com/onezeun/wanted-pre-onboarding-challenge-fe-2 </a>
 */

/** Todo
 * @typedef {Object} TodoType
 * @property {number} todoId
 * @property {string} content
 * @property {boolean} isCompleted
 * @property {string} category
 * @property {string[]} [tags]
 */

/** Tags
 * @typedef {object} TagsType
 * @property {number} tagId
 * @property {string} name
 */

/**
 * CREATE
 * @param {string} content
 * @param {string} category
 * @param {string[]} [tags]
 * @returns {number}
 */
function createTodo(content, category, tags) { }


/**
 * All READ
 * @function getAllTodos
 * @return {Array}
 */
function getAllTodos() { }

/**
 * READ
 * @function getTodo
 * @param {number} todoId
 * @returns {Object}
 */
function getTodo(todoId) { }

/**
 * UPDATE
 * @function updateTodo
 * @param {number} todoId
 * @param {object} todoItem
 * @param {string} todoItem.content
 * @param {boolean} todoItem.isCompleted
 * @param {string} todoItem.category
 * @param {string[]} [todoItem.tags]
 */
function updateTodo(todoId,todoItem) { }

/**
 * DELETE All Todos
 * @function deleteAllTodos
 */
function deleteAllTodos() { }

/**
 * DELETE Todo
 * @function deleteTodo
 * @param {number} todoId
 */
function deleteTodo(todoId) { }

/**
 * DELETE All Tags
 * @function deleteAllTags
 * @param {number} todoId
 */
function deleteAllTags(todoId) { }

/**
 * DELETE Tag
 * @function deleteTag
 * @param {number} todoId
 * @param {number} tagId
 */
function deleteTag(todoId, tagId) { }

