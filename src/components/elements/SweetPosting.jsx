import React, { useState } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import theme from "../../style/Theme";
import { FlexAttribute } from "../../style/Mixin";

import Button from "./Button";

import { __uploadImage } from "../../redux/modules/sweetSlice";

import { FaUserCircle } from "react-icons/fa";
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

  const submitHandler = () => {
    const formData = new FormData();

    imageFormData.forEach((image) => {
      formData.append("image", image);
    });
    // formData.append(
    //   "data",
    //   JSON.stringify({
    //     image: JSON.stringify(imageFormData),
    //   })
    // );
    dispatch(__uploadImage(imageFormData));
    for (let value of formData.values()) {
      console.log(value);
    }
  };

  return (
    <>
      <SweetPostingContainer>
        <InputWrapper>
          <UserImage>
            <FaUserCircle size={55} />
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
          ></input>
          <Button onClick={submitHandler} wh="s">
            Sweet
          </Button>
        </SubmitWrapper>
      </SweetPostingContainer>
    </>
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
  border-radius: 50%;
  :hover {
    background-color: ${theme.color.category_hover};
  }
`;

const PreviewImageWrapper = styled.div`
  ${FlexAttribute("row", "", "center")}
  flex-wrap: wrap;
`;

const PreviewImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 20px;
  border-radius: 30px;
  object-fit: cover;
`;

export default SweetPosting;
