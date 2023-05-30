export interface IPlanFeature {
    text: string;
    footnote?: string;
    negative?: boolean;
}

export interface IPlan {
    planTitle: string;
    tagline: string;
    quota: number;
    features: IPlanFeature[];
    cta: string;
}
