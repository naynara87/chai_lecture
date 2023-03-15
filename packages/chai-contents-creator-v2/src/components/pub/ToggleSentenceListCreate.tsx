import styled from "@emotion/styled";
import React from "react";
import ContentCreatorLayout from "../molecules/ContentCreatorLayout";
import AddButton from "../atoms/AddButton";
import TogglesWrapper from "../atoms/TogglesWrapper";
import ObjectDeleteButton from "../atoms/ObjectDeleteButton";

const ToggleSentenceWrapper = styled.div`
`;

const ToggleSentenceListCreate = () => {
	return (
		<ContentCreatorLayout>
			<ToggleSentenceWrapper className="toggle-sentence-wrapper">
				<TogglesWrapper />
				<AddButton>문장 추가</AddButton>
				<div className="sentence-wrap">
					<ObjectDeleteButton />
				</div>
			</ToggleSentenceWrapper>
		</ContentCreatorLayout>
	);
};

export default ToggleSentenceListCreate;
