import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import myResumePDF from '../assets/Resume-RoynulRohan.pdf';

const Nav = () => {
    const [didScroll, setDidScroll] = useState(true);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            setDidScroll(window.scrollY < 60);
        });

        return () => {
            document.removeEventListener('scroll', () => {
                setDidScroll(window.scrollY < 60);
            });
        };
    }, []);

    return (
        <header className='text-gray-600 body-font fixed z-50 w-full'>
            <div className='container mx-auto flex flex-wrap p-5 flex-col-reverse md:flex-row items-center'>
                <RouterLink
                    to='/'
                    className={
                        ' title-font font-medium cursor-pointer items-center text-gray-900 mt-5 md:mt-0 md:mb-0 hidden sm:flex transition-all' +
                        (didScroll ? ' ' : ' opacity-0')
                    }>
                    <span className='ml-3 text-xl w-24'>
                        <svg viewBox='0 0 350 287.91666525287667' preserveAspectRatio='xMidYMid meet' className='css-g5ufxp' id='eechfcgg'>
                            <defs id='SvgjsDefs1090'></defs>
                            <g
                                id='SvgjsG1091'
                                featurekey='symbolContainer'
                                transform='matrix(1.27301167018373,0,0,1.27301167018373,47.00044494512284,-19.9997804107801)'
                                fill='#111'>
                                <path
                                    xmlns='http://www.w3.org/2000/svg'
                                    d='M17.914 148.907zM22.657 154.94a90.586 90.586 0 0 0 5.861 6.251c6.914 6.805 15.159 12.525 24.004 16.851 3.259 1.526 6.265 3.107 9.787 4.468.88.338 1.779.7 2.724 1.026.953.302 1.941.604 2.974.903 1.027.321 2.122.549 3.267.786 1.146.23 2.336.493 3.614.624a91.24 91.24 0 0 1-18.434-5.99 93.833 93.833 0 0 1-16.873-9.842c-10.548-7.727-19.57-17.648-26.16-28.989-.272-.339-.685-.985-1.18-1.808l-.796-1.348-.803-1.551c-.534-1.076-1.149-2.168-1.62-3.226a71.281 71.281 0 0 0-1.326-2.748c2.048 5.101 4.412 9.563 7.059 13.806a93.473 93.473 0 0 0 3.869 5.697c-.192-.259-.392-.511-.583-.771a95.012 95.012 0 0 0 4.6 5.841l.016.02zM18.039 149.078l-.125-.17.125.17zM1.335 106.042l-.483-3.875c.256 2.365.553 5.008 1.096 7.654l-.327-1.879a23.961 23.961 0 0 1-.286-1.9zM85.812 185.575c6.652.673 13.628.472 20.461-.609 6.837-1.077 13.524-2.987 19.741-5.449-11.45 4.503-23.602 6.506-35.49 6.171-1.591-.025-3.159 0-4.712-.113z'></path>
                                <path
                                    xmlns='http://www.w3.org/2000/svg'
                                    d='M46.426 171.967l-.259-.165c.087.055.172.111.259.165zM46.167 171.802zM43.653 170.135zM56.077 177.284A83.837 83.837 0 0 0 73.2 183.1c-9.688-2.21-18.805-6.109-26.774-11.133 3.06 1.947 6.277 3.749 9.651 5.317zM177.002 107.094c.098-1.58.296-3.238.346-4.027.594-5.071.77-9.401.745-13.745-.11-.783-.425-2.25-.55-3.918-.153-1.672-.378-3.309-.568-4.924-.289-1.601-.538-3.186-.854-4.74 2.275 11.617 2.237 23.279.144 34.282a94.97 94.97 0 0 1 .737-2.928z'></path>
                                <path
                                    xmlns='http://www.w3.org/2000/svg'
                                    d='M.887 83.482c.848-6.9 2.653-13.626 4.37-18.107l-.695 3.28c.429-.961 1.122-3.194 2.067-5.557l.682-1.802.753-1.747c.5-1.131.92-2.203 1.363-3.025-.303.771-.595 1.602-.947 2.436-.345.837-.732 1.687-1.101 2.542l1.514-3.409A111.863 111.863 0 0 0 4.954 69.8c-1.133 4.352-2.029 8.926-2.511 13.032-.14 1.024-.189 2.024-.28 2.978-.067.954-.183 1.864-.192 2.724-.042 1.719-.1 3.224-.071 4.428.105 2.409.25 3.61.459 2.939.411-1.333.403-8.188 1.837-16.767.767-4.276 1.868-8.966 3.362-13.561 1.483-4.599 3.427-9.058 5.44-12.992l-.592 1.292-.545 1.331-1.116 2.691-1.024 2.78-.521 1.402c-.153.476-.308.954-.461 1.434-1.32 3.807-2.307 7.816-3.167 11.857l-.559 3.052c-.205 1.014-.292 2.046-.444 3.067-.318 2.041-.434 4.097-.611 6.129-.199 4.074-.239 8.098.13 11.946-.015-.914-.03-1.726-.017-2.512l.115-2.355c.048-.809.039-1.667.115-2.65.07-.983.134-2.091.19-3.402.391-6.608 1.572-13.15 3.408-19.481 1.75-6.358 3.814-11.957 6.889-17.03l.801-1.526c.542-1.024.993-2.034 1.566-3.064.653-1.13 1.278-1.976 1.784-2.751.521-.767.963-1.441 1.469-2.095l3.682-5.082c.075-.009-.022.185-.2.473a28.962 28.962 0 0 1 1.959-2.49c.755-.875 1.488-1.803 2.109-2.569.146-.007.288-.011.623-.251 8.65-9.197 19.295-16.692 31.291-21.417l2.667-1.039 2.7-.899 1.343-.448 1.36-.38 2.71-.753c1.55-.373 3.12-.751 4.721-1.091l2.437-.426c.819-.141 1.642-.3 2.484-.378 1.674-.201 3.134-.625 3.921-.729 4.369-.249 8.73-.199 13.849.216.397.007 1.015.043 1.732.082.717.041 1.537.061 2.332.134.932.21 1.927.418 2.971.621 6.369.988 12.527 2.754 18.386 5.103l-.007-.028 2.244.894 2.29 1.058c1.571.684 3.11 1.559 4.7 2.383.798.407 1.554.904 2.338 1.354.77.474 1.576.894 2.32 1.412 1.508 1.002 3.037 1.961 4.446 3.032a99.912 99.912 0 0 1 6.6 5.198c.046.042.094.081.14.122l.042.038 1.457 1.322 1.394 1.391 1.395 1.392c.462.467.89.967 1.337 1.449-.216-.35-.208-.491-.2-.63-.689-.66-1.504-1.441-2.309-2.21 1.343 1.222 2.515 2.327 3.477 3.229.371.474.776.94 1.16 1.449l1.186 1.566 1.261 1.629 1.255 1.752c2.226 2.838 4.191 5.874 6.057 8.97.864 1.588 1.817 3.131 2.586 4.774l1.213 2.436 1.092 2.497c.314.533.192.022.231-.068 1.225 2.962 2.21 6.042 3.102 9.146a88.212 88.212 0 0 1 3.408 17.211c.225 1.378.321 2.772.52 4.153l-.123 2.924c-.001 1.103.057 2.206.01 3.311l-.128 3.326c-.016.75-.124 1.569-.187 2.459-.084.888-.128 1.846-.256 2.856l-.412 3.192c-.132 1.119-.387 2.269-.583 3.471a90.635 90.635 0 0 1-4.312 15.482c-.242.826-.427 1.486-.592 1.855-.627 1.501-1.296 2.954-1.942 4.385-.723 1.394-1.386 2.788-2.127 4.108a86.09 86.09 0 0 1-7.949 12.379c-.336.439-.649.885-.987 1.297l-.998 1.206c-.66.779-1.25 1.558-1.876 2.234-1.251 1.352-2.301 2.606-3.286 3.549-1.128 1.178-1.027 1.233-.246.665a35.07 35.07 0 0 0 1.608-1.262l2.122-1.914c.776-.677 1.519-1.441 2.235-2.161.708-.725 1.416-1.386 1.962-1.984 1.101-1.191 1.824-1.926 1.67-1.599-1.777 3.345-5.013 7.471-9.743 12.035-2.413 2.227-5.128 4.647-8.339 6.98-1.566 1.221-3.307 2.338-5.082 3.558-1.834 1.123-3.708 2.353-5.757 3.445-4.484 2.442 3.365-1.475 3.577-1.512a22.87 22.87 0 0 1-2.377 1.64c-1.478.786-2.943 1.597-4.474 2.273-.895.411-1.774.855-2.679 1.239l-2.729 1.122 1.444-.568c2.952-1.173 5.711-2.555 8.202-3.922-.936.566-1.96 1.221-3.082 1.812-1.203.622-2.448 1.302-3.697 1.909l-3.625 1.686c12.968-4.711 24.885-12.507 34.319-22.67 4.723-5.066 8.935-10.631 12.369-16.651a93.904 93.904 0 0 0 8.288-18.999c-3.154 9.93-8.071 19.052-13.981 26.765 10.744-14.507 17.15-32.293 17.999-50.636-.001 1.011-.101 2.018-.168 3.025-.083 1.007-.123 2.018-.241 3.022-.257 2.005-.441 4.021-.827 6.009-.624 4-1.636 7.931-2.782 11.815 2.262-7.021 3.613-14.424 4.145-21.869.554-7.451.092-14.947-1.057-22.211 1.974 9.622 2.301 20.524.619 31.298 1.182-6.949 1.482-14.112 1.028-21.214-.102-2.713-.422-5.407-.685-7.901-.377-2.476-.662-4.762-1.027-6.611 1.445 6.826 2.015 12.648 2.293 18.136-.267-11.977-2.748-24.112-7.62-35.511 2.659 6.191 4.842 12.851 6.175 19.698 1.34 6.84 1.897 13.838 1.58 20.57-.015-.788.018-1.575-.028-2.366l-.107-2.391c.287 10.85-1.384 21.604-4.696 31.717-1.662 5.056-3.715 9.969-6.2 14.644a95.521 95.521 0 0 1-8.56 13.316c3.673-4.29 7.551-10.354 10.646-17.015 3.081-6.675 5.368-13.894 6.941-20.199-2.314 11.322-6.907 22.494-13.571 32.471-6.646 9.985-15.351 18.764-25.423 25.502-10.06 6.759-21.474 11.437-33.187 13.748a94.608 94.608 0 0 1-17.657 1.809 94.462 94.462 0 0 1-17.361-1.515l3.005.571c1.002.19 2.018.295 3.026.445 2.016.324 4.055.446 6.087.633 4.073.229 8.168.306 12.25-.005 4.089-.217 8.152-.827 12.196-1.572 2.006-.456 4.036-.829 6.017-1.414.994-.278 2-.521 2.987-.83l2.955-.958c-1.492.462-3.062 1.074-4.739 1.523l-2.101.618a91.772 91.772 0 0 0 12.91-4.496 89.46 89.46 0 0 0 5.651-2.705 96.653 96.653 0 0 1-10.714 4.872 98.407 98.407 0 0 1-21.66 5.382c-1.11.176-2.122.231-3.029.326l-2.428.24c-1.429.113-2.484.164-3.222.245-1.477.147-1.687.284-1.099.397.587.113 1.971.203 3.673.251 1.697-.01 3.71-.101 5.541-.268 18.397-1.887 35.288-9.107 48.824-19.916 13.545-10.811 23.919-25.172 29.701-41.467.363-.946.642-1.922.944-2.89.293-.971.617-1.932.882-2.912.491-1.97 1.072-3.917 1.448-5.917l.619-2.985.487-3.012.241-1.507.172-1.517.342-3.034c.698-8.114.422-16.315-.812-24.363-.66-4.554-1.82-9.961-3.315-14.777l-1.15-3.484c-.4-1.107-.825-2.151-1.203-3.133l-.557-1.415-.571-1.271-.981-2.124c-3.134-6.359-7.072-12.424-11.682-18.065-4.605-5.643-9.896-10.868-15.861-15.418l-2.244-1.703-2.327-1.608-1.166-.806-1.203-.756-2.417-1.508c-3.295-1.904-6.67-3.739-10.228-5.261-3.521-1.598-7.206-2.895-10.957-4.055-1.895-.52-3.781-1.1-5.724-1.499-.968-.209-1.928-.463-2.907-.638l-2.944-.521C100.363.01 93.04-.285 85.724.265 78.412.83 71.069 2.218 64.028 4.614l-2.635.913c-.881.297-1.73.682-2.597 1.019-.858.359-1.735.673-2.577 1.069l-2.532 1.173c-.852.376-1.675.808-2.496 1.245l-2.469 1.297-2.402 1.412c-.8.472-1.606.933-2.372 1.458l-2.324 1.528c-.782.497-1.506 1.078-2.261 1.612-.741.554-1.51 1.07-2.226 1.654l-2.157 1.737c-.729.565-1.417 1.178-2.103 1.792l-2.063 1.83-1.971 1.919c-.656.639-1.319 1.271-1.93 1.951-5.031 5.298-9.451 11.078-13.066 17.194A99.518 99.518 0 0 0 5.18 64.379C.805 77.299-.45 90.402.134 102.237c-.126-4.872-.147-11.859.753-18.755zm141.132 90.446a96.807 96.807 0 0 0 8.765-6.389c-2.84 2.339-5.758 4.499-8.765 6.389zm40.217-54.282c-.299.901-.552 1.791-.882 2.641l-.957 2.523-.466 1.248-.513 1.231a108.54 108.54 0 0 0-.997 2.501 97.307 97.307 0 0 1-6.587 13.35c-2.521 4.275-5.443 8.281-8.565 12.04-1.542 1.899-3.222 3.66-4.874 5.421l-2.581 2.523c-.847.848-1.774 1.604-2.652 2.404-.736.64-1.478 1.266-2.225 1.882a90.696 90.696 0 0 0 7.896-7.312 89.808 89.808 0 0 1-11.689 10.188c-1.036.722-2.037 1.496-3.113 2.176l-3.247 2.069-3.43 1.949c-1.167.648-2.399 1.224-3.634 1.855a74.206 74.206 0 0 1 2.685-1.508c1.021-.567 2.092-1.237 3.138-1.85 1.054-.601 2.012-1.261 2.808-1.813.796-.552 1.42-1.01 1.745-1.306-.464.315-.936.617-1.406.924a92.477 92.477 0 0 0 1.507-1.015c-.021.023-.065.059-.101.091 10.932-7.466 20.245-17.277 27.223-28.462 7.009-11.175 11.57-23.781 13.46-36.601-.41 5.142-1.352 9.248-2.543 12.851zm-6.654-65.352zm-8.448-12.698a92.37 92.37 0 0 1 7.773 14.352c.25.549.486 1.106.719 1.664 4.963 12.154 7.221 25.192 6.89 38.036.084-4.25-.198-8.498-.669-12.71-.533-4.854-1.518-9.65-2.824-14.341-2.562-9.407-6.723-18.323-12.005-26.451.485.67.996 1.396 1.525 2.166a32.826 32.826 0 0 1 1.59 2.463l-.638-1.109-.689-1.079-1.378-2.156c-.938-1.424-1.955-2.796-2.934-4.192-1.062-1.334-2.069-2.712-3.174-4.011-.836-.953-1.637-1.938-2.485-2.879 2.992 3.155 5.801 6.54 8.299 10.247zM96.886 1.152c1.467.078 2.937.221 4.407.331 1.204.101 2.402.279 3.588.413.356.015.732.039 1.204.092.471.065 1.034.186 1.769.354 5.469.912 10.459 2.283 14.001 3.699 6.798 2.573 13.123 5.774 18.86 9.471 5.739 3.69 10.889 7.887 15.246 12.471 2.008 2.179 1.422 1.704.315.646l1.662 1.764c-.736-.734-1.459-1.478-2.206-2.196l-2.301-2.09c.56.49 1.918 1.663 2.845 2.522-7.389-7.539-16.026-13.799-25.375-18.404-9.356-4.603-19.431-7.446-29.502-8.581 1.618.18 2.412.22 3.168.24-1.085-.127-2.173-.301-3.274-.401-1.479-.097-2.955-.229-4.423-.301l-4.36-.103c1.444-.001 2.907.039 4.376.073z'></path>
                                <path
                                    xmlns='http://www.w3.org/2000/svg'
                                    d='M115.942 184.69l.426-.125c-.446.12-.885.252-1.334.366.304-.076.609-.15.908-.241zM160.424 146.151c4.235-5.587 7.977-12.263 10.366-18.014l-.029.006c-6.061 14.322-15.892 26.66-28.16 35.744a159.12 159.12 0 0 0 6.418-4.703c2.698-2.82 7.213-7.406 11.405-13.033zM35.35 162.846c7.172 6.412 15.821 11.992 25.448 15.751 3.754 1.413 7.585 2.651 11.503 3.523 1.944.502 3.929.812 5.899 1.181.987.175 1.987.272 2.979.412.994.129 1.986.275 2.987.333-4.519-.501-9.005-1.251-13.372-2.44-4.364-1.185-8.642-2.65-12.769-4.449a97.4 97.4 0 0 1-11.894-6.314c-3.786-2.408-7.376-5.097-10.781-7.997zM123.877 174.277l-2.219.871-2.266.756c-1.5.54-3.047.944-4.59 1.373 1.551-.39 3.111-.754 4.624-1.254l2.283-.698 2.23-.815c-.086-.044-.594.055-.062-.233zM97.683 179.965c-1.16.099-2.326.09-3.494.102-1.168.014-2.338.039-3.509-.038l1.576.148c.482.031.916.068 1.295.113 1.381-.118 2.752-.151 4.132-.325zM51.441 169.209c1.341.787 2.765 1.48 4.178 2.244.354.194.996.415 1.801.709-1.721-.739-3.37-1.655-5.046-2.505-.83-.441-1.629-.935-2.443-1.395-.812-.464-1.621-.927-2.389-1.445l.937.626.977.584 1.985 1.182z'></path>
                            </g>
                            <g
                                id='SvgjsG1092'
                                featurekey='monogramFeature-0'
                                transform='matrix(2.687181167481772,0,0,2.687181167481772,108.94455031326666,-21.44069093936067)'
                                fill='#111'>
                                <path d='M1.86 33.6 c-1.68 0.96 -1.92 -0.36 -0.18 -1.32 c4.02 -2.22 10.2 -5.4 16.38 -7.5 c1.74 -5.82 2.82 -8.82 3.06 -9.36 c0.36 -0.96 1.62 -1.08 1.14 0.18 c-0.24 0.6 -1.38 4.02 -2.76 8.7 c3.12 -0.96 6.18 -1.56 8.88 -1.56 c8.58 0 13.32 1.8 13.32 6.84 c0 5.88 -6.9 10.92 -13.68 14.28 c-2.94 1.5 -10.2 5.1 -15.78 7.86 l-1.2 4.68 l18.06 -0.78 c1.74 -0.06 2.16 1.44 0.72 1.5 c-0.96 0.06 -11.22 0.48 -19.14 0.72 c-1.74 6.96 -3.12 12.66 -3.42 14.22 c-0.54 2.52 -0.54 2.76 -0.18 2.58 s0.6 0.12 -0.54 1.38 c-1.08 1.2 -1.68 0.54 -1.14 -1.62 l4.14 -16.5 c-3.9 0.12 -7.32 0.24 -7.8 0.18 c-1.56 -0.06 -2.7 -1.44 -0.48 -2.4 c1.14 -0.48 5.1 -2.46 10.08 -4.98 l1.8 -7.5 c1.68 -6.9 3.18 -12.42 4.38 -16.68 c-5.64 1.98 -11.58 4.8 -15.66 7.08 z M14.28 43.260000000000005 l-1.62 6.72 l13.98 -7.14 c9.42 -4.74 14.04 -9.48 14.04 -13.56 c0 -3.3 -4.86 -5.16 -12.3 -5.16 c-2.52 0 -5.88 0.78 -9.42 1.92 c-1.5 5.1 -3.24 11.34 -4.68 17.22 z M9.9 56.46 l1.02 -4.14 c-2.52 1.26 -4.62 2.22 -5.52 2.58 c-3.06 1.26 -3.42 1.74 -1.14 1.74 c0.6 0 2.94 -0.06 5.64 -0.18 z'></path>
                            </g>
                            <g
                                id='SvgjsG1093'
                                featurekey='nameFeature-0'
                                transform='matrix(0.9491399743117808,0,0,0.9491399743117808,-3.986103487564717,229.5988463680632)'
                                fill='#111'>
                                <path d='M19.102 40 l-7.1484 -12.422 l-3.8672 0 l0 12.422 l-3.8867 0 l0 -27.617 l9.2969 0 c5.7813 0 8.418 3.5352 8.418 7.8711 c0 3.8477 -2.2656 6.5234 -6.0547 7.168 l7.793 12.578 l-4.5508 0 z M8.0859 15.742 l0 8.8672 l4.8828 0 c3.5938 0 5.2148 -1.7969 5.2148 -4.4141 c0 -2.5781 -1.6211 -4.4531 -5.2148 -4.4531 l-4.8828 0 z M46.9875546875 40.37109 c-7.832 0 -13.809 -5.3906 -13.809 -14.199 c0 -8.7891 5.9766 -14.16 13.809 -14.16 c7.793 0 13.789 5.3711 13.789 14.16 c0 8.8086 -5.9961 14.199 -13.789 14.199 z M46.9875546875 36.7187 c5.5273 0 9.9023 -3.8281 9.9023 -10.547 c0 -6.6602 -4.375 -10.488 -9.9023 -10.488 c-5.5469 0 -9.9414 3.8281 -9.9414 10.488 c0 6.7188 4.3945 10.547 9.9414 10.547 z M91.72889062499999 12.383 l-9.082 14.453 l0 13.164 l-3.9258 0 l0 -13.145 l-9.1016 -14.473 l4.4141 0 l6.6406 10.957 l6.6602 -10.957 l4.3945 0 z M121.0991328125 12.383 l3.8672 0 l0 27.617 l-4.1992 0 l-14.434 -21.914 l0 21.914 l-3.8477 0 l0 -27.617 l4.1602 0 l14.453 21.816 l0 -21.816 z M148.73040625 40.37109 c-5.7227 0 -10.156 -3.3789 -10.156 -9.6094 l0 -18.379 l3.8867 0 l0 17.832 c0 4.5508 2.7344 6.6406 6.2695 6.6406 s6.3281 -2.1094 6.3281 -6.6406 l0 -17.832 l3.8867 0 l0 18.379 c0 6.2305 -4.4531 9.6094 -10.215 9.6094 z M176.4403921875 36.4844 l9.4336 0 l0 3.5156 l-13.32 0 l0 -27.617 l3.8867 0 l0 24.102 z M227.9936015625 40 l-7.1484 -12.422 l-3.8672 0 l0 12.422 l-3.8867 0 l0 -27.617 l9.2969 0 c5.7813 0 8.418 3.5352 8.418 7.8711 c0 3.8477 -2.2656 6.5234 -6.0547 7.168 l7.793 12.578 l-4.5508 0 z M216.9775015625 15.742 l0 8.8672 l4.8828 0 c3.5938 0 5.2148 -1.7969 5.2148 -4.4141 c0 -2.5781 -1.6211 -4.4531 -5.2148 -4.4531 l-4.8828 0 z M255.87915625 40.37109 c-7.832 0 -13.809 -5.3906 -13.809 -14.199 c0 -8.7891 5.9766 -14.16 13.809 -14.16 c7.793 0 13.789 5.3711 13.789 14.16 c0 8.8086 -5.9961 14.199 -13.789 14.199 z M255.87915625 36.7187 c5.5273 0 9.9023 -3.8281 9.9023 -10.547 c0 -6.6602 -4.375 -10.488 -9.9023 -10.488 c-5.5469 0 -9.9414 3.8281 -9.9414 10.488 c0 6.7188 4.3945 10.547 9.9414 10.547 z M299.4284921875 12.383 l3.8867 0 l0 27.617 l-3.8867 0 l0 -12.109 l-13.574 0 l0 12.109 l-3.9258 0 l0 -27.617 l3.9258 0 l0 12.051 l13.574 0 l0 -12.051 z M335.380546875 40 l-2.3047 -6.4453 l-12.344 0 l-2.3047 6.4453 l-4.043 0 l10.176 -27.617 l4.6875 0 l10.176 27.617 l-4.043 0 z M321.943346875 30.1562 l9.9219 0 l-4.9609 -13.926 z M369.0874140625 12.383 l3.8672 0 l0 27.617 l-4.1992 0 l-14.434 -21.914 l0 21.914 l-3.8477 0 l0 -27.617 l4.1602 0 l14.453 21.816 l0 -21.816 z'></path>
                            </g>
                        </svg>
                    </span>
                </RouterLink>
                <nav
                    className={
                        'md:ml-auto text-gray-700 flex flex-wrap items-center text-base justify-center transition-all' +
                        (didScroll ? '' : ' bg-white px-4 p-2 rounded-xl shadow-lg')
                    }>
                    {window.location.hash === '#/' ? (
                        <>
                            <Link
                                smooth
                                spy
                                duration={150}
                                activeClass='bg-gray-100 p-2'
                                className={
                                    'mr-5 hover:text-gray-900 cursor-pointer rounded-xl transition-all ' +
                                    (didScroll ? 'hover:scale-110' : 'hover:bg-gray-200 p-2')
                                }
                                to='main'>
                                About
                            </Link>
                            <Link
                                smooth
                                spy
                                duration={250}
                                activeClass='bg-gray-200 p-2'
                                className={
                                    'mr-5 hover:text-gray-900 cursor-pointer rounded-xl transition-all ' +
                                    (didScroll ? 'hover:scale-110' : 'hover:bg-gray-200 p-2')
                                }
                                to='projects'>
                                Projects
                            </Link>
                            <Link
                                smooth
                                spy
                                duration={250}
                                activeClass='bg-gray-200 p-2'
                                className={
                                    'mr-5 hover:text-gray-900 cursor-pointer rounded-xl transition-all ' +
                                    (didScroll ? 'hover:scale-110' : 'hover:bg-gray-200 p-2')
                                }
                                to='contact'>
                                Contact
                            </Link>
                        </>
                    ) : (
                        <>
                            <RouterLink
                                className={
                                    'mr-5 hover:text-gray-900 cursor-pointer rounded-xl transition-all ' +
                                    (didScroll ? 'hover:scale-110' : 'hover:bg-gray-200 p-2')
                                }
                                to='/'>
                                About
                            </RouterLink>
                            <RouterLink
                                className={
                                    'mr-5 hover:text-gray-900 cursor-pointer rounded-xl transition-all ' +
                                    (didScroll ? 'hover:scale-110' : 'hover:bg-gray-200 p-2')
                                }
                                to='/'
                                state={{
                                    scrollTo: 'projects',
                                }}>
                                Projects
                            </RouterLink>
                            <RouterLink
                                className={
                                    'mr-5 hover:text-gray-900 cursor-pointer rounded-xl transition-all ' +
                                    (didScroll ? 'hover:scale-110' : 'hover:bg-gray-200 p-2')
                                }
                                to='/'
                                state={{
                                    scrollTo: 'contact',
                                }}>
                                Contact
                            </RouterLink>
                        </>
                    )}

                    <a
                        className='items-center font-semibold bg-purple-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-purple-700 rounded text-base'
                        href={myResumePDF}
                        rel='noreferrer'
                        target='_blank'>
                        Resume
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Nav;
