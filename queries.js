const getAllPostsQuery = "SELECT * FROM TB_ADM_EFFORT_DATA ORDER BY SERIAL_NO";
const getPostByIdQuery = "SELECT * FROM TB_ADM_EFFORT_DATA WHERE SERIAL_NO = @id";
const createPostQuery = "INSERT INTO TB_ADM_EFFORT_DATA (REQ_DATE, REQ_TIME, REQ_STS, EXE_COMP, REQ_COMP, REQ_USER_NAME, REQ_CONTENTS, PRCS_CONTENTS, PRCS_MIN, COMPLETE_REQ_DATE, PRCS_COMPLETE_DATE) VALUES (@reqDate, @reqTime, @reqSts, @exeComp, @reqComp, @reqUserName, @reqContents, @prcsContents, @prcsMin, @completeReqDate,  @prcsCompleteDate)";
const deletePostQuery  = "DELETE FROM TB_ADM_EFFORT_DATA WHERE SERIAL_NO = @id";
const updatePostQuery = "UPDATE TB_ADM_EFFORT_DATA SET REQ_DATE = @reqDate, REQ_TIME = @reqTime, REQ_STS = @reqSts, EXE_COMP = @exeComp, REQ_COMP = @reqComp, REQ_USER_NAME = @reqUserName, REQ_CONTENTS = @reqContents, PRCS_CONTENTS = @prcsContents, COMPLETE_REQ_DATE = @completeReqDate, PRCS_COMPLETE_DATE = @prcsCompleteDate WHERE 1=1 AND SERIAL_NO = @id";

module.exports = {
    getAllPostsQuery,
    getPostByIdQuery,
    createPostQuery,
    deletePostQuery,
    updatePostQuery,
};