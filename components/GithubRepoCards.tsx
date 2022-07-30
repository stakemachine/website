import { GithubRepo } from "../constants/github.repos"
import GithubRepoCard from "./GithubRepoCard"

export default function GithubRepoCards({ githubRepos }: { githubRepos: GithubRepo[] }) {
    return (
        <section className="relative pt-10 lg:pt-10 pb-12">
            <div className="max-w-6xl mx-auto">

                <span className="font-semibold text-lg text-indigo-500 mb-2 block text-center">
                    Our projects
                </span>
                <h2
                    className="
                    text-center
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                >
                    We love Open-Source
                </h2>

                <div className="flex flex-wrap pt-4 md:-mr-6 px-4">
                    {githubRepos?.map((repository: GithubRepo, index) => {
                        return (
                            <GithubRepoCard key={index} repository={repository} />
                        )
                    })}
                </div></div>
        </section>

    )
}