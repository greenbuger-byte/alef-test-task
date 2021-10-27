import React from 'react';
import { Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Default from "@alef/layers/default";

import { pages } from "@utils/pages";
import { mapCommonStates } from "@utils/store";

import useHumanAge from "@alef/hooks/useHumanAge";

import {
    ParentTitle,
    PreviewTitleHeader,
    StyledDefaultButton} from "./Preview.styles";

const Preview = (props) => {
    const { userState } = props;
    const { parent, children } = userState;
    const humanAge = useHumanAge();
    const { t } = useTranslation()

    if(!parent) return <Redirect to={pages.HOME} />

    return (
        <Default title={t('page.review')}>
            <PreviewTitleHeader>
                {t('title.personal')}
            </PreviewTitleHeader>
            <ParentTitle>{parent.name}, {parent.age} {humanAge(parent.age)} </ParentTitle>
            <PreviewTitleHeader>
                {t('title.child')}
            </PreviewTitleHeader>
            {children && children.map(( child, index )=>
                <StyledDefaultButton key={index}
                    variant="default"
                    label={`${child.name}, ${child.age} ${humanAge(child.age)}`}
                />)
            }
        </Default>
    );
};

export default mapCommonStates(Preview);