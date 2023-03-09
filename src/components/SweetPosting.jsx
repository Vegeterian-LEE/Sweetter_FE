import React, { useState } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import theme from "../style/Theme";
import {
  FlexAttribute,
  IconStyle,
  PostImageStyle,
  UserImageStyle,
} from "../style/Mixin";

import Button from "../elements/Button";

import TwitterLogo from "../assets/TwitterLogo.jpg";

import { __uploadImage, __uploadSweet } from "../redux/modules/sweetSlice";

import { BsImage } from "react-icons/bs";

const SweetPosting = () => {
  const [contents, setContents] = useState("");
  const [showImages, setShowImages] = useState([]);
  const [imageFormData, setImageFormData] = useState([]);
  const dispatch = useDispatch();

  const ImageHandler = (event) => {
    const formImg = new FormData();
    imageFormData.forEach((image) => {
      formImg.append("files", image);
    });
    setImageFormData([...imageFormData, ...event.target.files]);
    // 이미지 미리 보기
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];
    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }
    if (imageUrlLists.length > 3) {
      setImageFormData(imageFormData.slice(0, 3));
      imageUrlLists = imageUrlLists.slice(0, 3);
    }
    setShowImages(imageUrlLists);
  };

  const setImageFormdata = () => {
    const formData = new FormData();

    imageFormData.forEach((image) => {
      formData.append("image", image);
    });
    formData.append("data", {
      image: JSON.stringify(imageFormData),
    });

    return formData;
  };

  const submitHandler = async () => {
    const formData = setImageFormdata();

    if (imageFormData.length === 0) {
      const data = { content: contents, image: null };
      dispatch(__uploadSweet(data));
    } else {
      dispatch(__uploadImage(formData)).then((response) => {
        const data = { content: contents, imageUrls: response.payload };
        dispatch(__uploadSweet(data));
      });
    }
  };

  return (
    <SweetPostingContainer>
      <InputWrapper>
        <UserImage>
          <img src={TwitterLogo} alt="userImage" />
        </UserImage>
        <Preview>
          <SweetInput
            value={contents}
            onChange={(event) => setContents(event.target.value)}
            placeholder="What's happening?"
          ></SweetInput>
          <PreviewImageWrapper>
            {showImages.map((image, id) => (
              <PreviewImage key={id} src={image} alt={`${image}-${id}`} />
            ))}
          </PreviewImageWrapper>
        </Preview>
      </InputWrapper>
      <SubmitWrapper>
        <ImageLabel htmlFor="file-input">
          <BsImage size={20} />
        </ImageLabel>
        <input
          id="file-input"
          name="sweetImage"
          type="file"
          multiple
          onChange={ImageHandler}
        />
        <Button onClick={submitHandler} wh="s">
          Sweet
        </Button>
      </SubmitWrapper>
    </SweetPostingContainer>
  );
};

const SweetPostingContainer = styled.div`
  ${FlexAttribute("column", "", "center")}
  margin-top: 20px;
  width: 44vw;
`;

const InputWrapper = styled.div`
  ${FlexAttribute("row", "", "center")}
  margin-top: 10px;
`;

const UserImage = styled.div`
  margin-right: 15px;
  img {
    ${UserImageStyle}
  }
`;

const Preview = styled.div`
  ${FlexAttribute("column", "", "center")}
  width: 75%;
`;

const SweetInput = styled.textarea`
  height: 100px;
  font-size: 17px;
  resize: none;
  border-bottom: ${theme.borderline};
`;

const SubmitWrapper = styled.div`
  ${FlexAttribute("row", "center", "space-around")}
  margin-top: 15px;
  padding-bottom: 15px;
  border-bottom: ${theme.borderline};
  input {
    display: none;
  }
`;

const ImageLabel = styled.label`
  padding: 8px 8px 4px 8px;
  ${IconStyle}
`;

const PreviewImageWrapper = styled.div`
  ${FlexAttribute("row", "", "center")}
  flex-wrap: wrap;
`;

const PreviewImage = styled.img`
  ${PostImageStyle}
`;

export default SweetPosting;
