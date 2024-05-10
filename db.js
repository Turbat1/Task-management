const { db } = require('./db'); 
async function createTask(customerId, staffId, description) {
    return await db.one('CALL create_task($1, $2, $3)', [customerId, staffId, description]);
}

async function updateTaskStatus(taskId, newStatus) {
    return await db.none('CALL update_task_status($1, $2)', [taskId, newStatus]);
}

async function logTaskAction(taskId, staffId, action) {
    return await db.none('CALL log_task_action($1, $2, $3)', [taskId, staffId, action]);
}
