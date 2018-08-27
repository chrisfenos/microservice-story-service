const { getUserId } = require('../utils')


function stories (_, args, context, info) {
    // const userId = getUserId(context);
    return context.prisma.query.stories(
    {
        where: {
            OR:[               
            {title: args.searchString},
            {description: args.searchString},               
            ]
        },
    },
    info,
    )
}  

function storyById (_, args, context, info) {
    // const userId = getUserId(context);
    return context.prisma.query.story(
        {
            where: {
                id: args.storyID
            }
        }
    )
}

function storiesByProfileId (_, args, context, info) {
    // const userId = getUserId(context);
    return context.prisma.query.stories(
        {
            where: {
                profileId: args.profileId
            }
        }
    )
}

function searchByKeyword (_, args, context, info) {
    // const userId = getUserId(context);
    return context.prisma.query.stories(
        {
            where: {
                OR:[               
                    {title_contains: args.searchString},
                    {description_contains: args.searchString},   
                    {content_contains: args.searchString},              
                ]
            }
        }
    )
}

// function searchByAuthor - need to query the gateway for the profile service

function searchByTitle (_, args, context, info) {
    // const userId = getUserId(context);
    return context.prisma.query.stories(
        {
            where: {
                OR: [
                    {title_contains: args.title}
                ]
            }
        }
    )
}

function allStories (_, args, context, info) {
    return context.prisma.query.stories(
        _, info
    )
}

function allSubmissions (_, args, context, info) {
    return context.prisma.query.submissions(
        _, info
    )
}


function getSubmissionsByFlag (_, args, context, info) {     
    return context.prisma.query.submissions(
        {
            where: {            
            flag: args.flag            
            }
        }
    )
}

module.exports = {
    stories,
    storyById,
    storiesByProfileId,
    getSubmissionsByFlag,
    searchByKeyword,
    searchByTitle,
    allStories,
    allSubmissions
}