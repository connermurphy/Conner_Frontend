import Header from "./Blocks/Header";
import FeaturedWork from "./Blocks/FeaturedWork";
import AboutBlock from "./Blocks/AboutBlock";
import ServicesBlock from "./Blocks/ServicesBlock";
import CTABanner from "./Blocks/CTABanner";
import ProjectList from "./Blocks/ProjectList";

const getBlockComponent = ({ __component, ...rest }, index) => {
    let Block;

    switch (__component) {
        case 'blocks.header':
            Block = Header;
            break;
        case 'blocks.featured-work':
            Block = FeaturedWork;
            break;
        case 'blocks.about-block':
            Block = AboutBlock;
            break;
        case 'blocks.services':
            Block = ServicesBlock;
            break;
        case 'blocks.cta-banner':
            Block = CTABanner;
            break;
        case 'blocks.project-list':
            Block = ProjectList;
            break;
    }

    return Block ? <Block key={`index-${index}`} {...rest} firstSection={index == 0 ? true : false} /> : null;
};

const BlockManager = ({ blocks }) => {
    return <>{blocks.map(getBlockComponent)}</>;
};

BlockManager.defaultProps = {
    blocks: [],
};

export default BlockManager;