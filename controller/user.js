import User from "../model/user.js";

export const createUser = async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      githubUrl: req.body.username || "",
      notionDB: req.body.notionDB || "",
      notionAPIKey: req.body.notionAPIKey || "",
      interests: req.body.interests || [],
      id: req.body.id,
      follow: [],
      follower: [],
    });
    const newUser = await user.save();
    res.status(200).json({ message: "유저 추가 성공", data: newUser });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// get은 body를 포함하지 않음에 유의 => params를 통해 아이디 전송함
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user === null) {
      return res.sttus(404).json({ message: "유저 검색 실패" });
    }
    return res.status(200).json({ message: "유저 검색 성공", data: user });
  } catch (error) {
    res.status(404).json({ message: "유저 검색 실패", error: error });
  }
};

// 갱신과 삭제 시에 사용되는 미들웨어
// 응답 본문에 user 객체를 추가하고,
export const getUserMiddleWare = async (req, res, next) => {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "계정을 찾을 수 없습니다." });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.user = user;
  next();
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: "유저 목록 반환 성공", data: users });
  } catch (error) {
    res.status(404).json({ message: "유저 목록 반환 실패", error: error });
  }
};

export const patchUser = async (req, res) => {
  try {
    if (req.body.username !== null) {
      res.user.username = req.body.username;
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
