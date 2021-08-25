import { getCurrentUser } from "../auth";
import { getUserInfo } from "./getUserInfo";

const getCurrentUserInfo = () => {
    const currentUser = getCurrentUser();
    if(!currentUser) return null;
    return await getUserInfo(currentUser.id);
}